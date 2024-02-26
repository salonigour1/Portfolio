import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { BsTwitterX } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';
import bg from '../blue_bg.jpg';
import { FaRegAddressCard } from 'react-icons/fa6';
import '../scss/Homepage.scss';

import Footer from './Footer';
import Socials from './Socials';
import About from './About';

function Homepage() {
  const sectionRef = useRef(null);
  function scrollToSection() {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <header>
        <div className='menu-btn'>
          <span className='menu-btn__burger'></span>
        </div>
      </header>
      <main>
        <section className='home'>
          <img src={bg} className='image' />
          <div className='main_content'>
            <h2>
              Hi, my name is <span className='name'>Saloni Gour</span>
            </h2>

            <div className='line'></div>
            <div className='tagline'>
              A passionate Frontend Developer Software Developer
            </div>

            <Socials />
          </div>
        </section>

        <div id='about'>
          <About />
        </div>
        <div id='footerr'>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Homepage;
