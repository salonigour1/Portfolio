import React from 'react';
import '../scss/components/About.scss';
function About() {
  return (
    <section className='about_container'>
      <div className='about_heading'>About</div>
      <div className='personal_info'>Personal Info</div>
      <div className='know_more'>Get to know more about me</div>
      <div className='introduction_skills'>
        <div className='left_introduction'>
          <span className='hello'>Hello!</span>
          <div>
            My name is Saloni Gour and I'm a passionate Frontend Web Developer
            using web technologies to build amazing products and focusing on
            problem solving for diffrent niches and diffrent industries using
            the power of technology.
            <br />
            <div>
              I will love to hear from you. Whether it's a project, job
              opportunity, or just a chat. Feel free to contact me.
            </div>
          </div>
        </div>
        <div className='right_skills'>
          <div className='skills_title'>Skills</div>
          <div className='skills--tag'>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Redux</span>
            <span>SCSS</span>
            <span>Tailwind CSS</span>
            <span>Firebase</span>
            <span>Git</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
