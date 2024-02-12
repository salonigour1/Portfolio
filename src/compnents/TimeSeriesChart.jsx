import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

// I am creating a function to simulate data retrieval from a
// database(mock Data)

const fetchDataFromDatabase = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        { date: '2023-01-01', value: Math.random() * 50 },
        { date: '2023-02-01', value: Math.random() * 50 },
        { date: '2023-03-01', value: Math.random() * 50 },
        { date: '2023-04-01', value: Math.random() * 50 },
      ];
      resolve(data);
    }, 1000);
  });
};

// I am creating a React component for the Time Series Chart
const TimeSeriesChart = ({ width, height }) => {
  const svgRef = useRef();
  const [data, setData] = useState([
    { date: '2023-01-01', value: Math.random() * 50 },
    { date: '2023-02-01', value: Math.random() * 50 },
    { date: '2023-03-01', value: Math.random() * 50 },
    { date: '2023-04-01', value: Math.random() * 50 },
  ]);

  // Here i am Fetching data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Here i am checking if data is available in the localStorage
        // cache;
        const cachedData = localStorage.getItem('timeSeriesData');
        if (cachedData) {
          setData(JSON.parse(cachedData));
        } else {
          // If not, then it will fetch data from the database function

          // and store it in the localStorage cache

          const newData = await fetchDataFromDatabase();
          setData(newData);
          localStorage.setItem(
            'timeSeriesData',

            JSON.stringify(newData)
          );
        }
      } catch (err) {
        console.log('error', err);
      }
    };
    fetchData();
  }, []);

  // I am creating the time series chart using D3
  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(svgRef.current);

    // Here i am removing any existing elements in the SVG
    svg.selectAll('*').remove();

    // I am Setting margins and dimensions for the chart
    const margin = { top: 20, right: 30, bottom: 30, left: 50 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Here i am creating X and Y scales
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => new Date(d.date)))
      .range([0, innerWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()

      .range([innerHeight, 0]);

    // Here i am creating a line generator
    const line = d3
      .line()
      .x((d) => xScale(new Date(d.date)))
      .y((d) => yScale(d.value));

    // Here i am creating X and Y axis
    const xAxis = svg
      .append('g')
      .attr(
        'transform',
        `translate(${margin.left}, ${innerHeight + margin.top})`
      )
      .call(d3.axisBottom(xScale));

    const yAxis = svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)
      .call(d3.axisLeft(yScale));

    // Chat area was not within the bounds so here i am creating a clip
    // path to keep the chart area within bounds
    svg
      .append('defs')
      .append('clipPath')
      .attr('id', 'chart-area-clip')
      .append('rect')
      .attr('width', innerWidth)
      .attr('height', innerHeight);

    // I am appending the chart area within the clip path
    const chartArea = svg
      .append('g')
      .attr('clip-path', 'url(#chart-area-clip)')

      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Here i am appending the line to the chart area
    chartArea
      .append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', line);

    // Added a zoom functionality
    const zoom = d3
      .zoom()
      .scaleExtent([1, Infinity])
      .translateExtent([
        [0, 0],
        [width, height],
      ])
      .extent([
        [0, 0],
        [width, height],
      ])
      .on('zoom', zoomed);

    svg.call(zoom);

    // Below i updated chart elements on zoom
    function zoomed(event) {
      const { transform } = event;
      const newXScale = transform.rescaleX(xScale);
      const newYScale = transform.rescaleY(yScale);
      xAxis.call(d3.axisBottom(newXScale));
      yAxis.call(d3.axisLeft(newYScale));
      chartArea.select('.line').attr(
        'd',
        line.x((d) => newXScale(new Date(d.date))).y((d) => newYScale(d.value))
      );
    }
  }, [data, width, height]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default TimeSeriesChart;
