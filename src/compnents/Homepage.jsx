import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../scss/Homepage.scss';
import { FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { BsTwitterX } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import Menu from './Menu';

function Homepage() {
  return (
    <div>
      <header>
        <div className='menu-btn'>
          <span className='menu-btn__burger'></span>
        </div>
        <Menu />
      </header>
      <main>
        <section className='home'>
          <h2>Hi ! My Name Is</h2>
          <h1 className='main__name'>
            Saloni <span className='main__name--last'>Gour</span>
          </h1>
          <div className='social-icons'>
            <a
              href='https://www.linkedin.com/in/saloni-gour-556ba2243/'
              target='_blank'
            >
              <FaLinkedin />
            </a>
          </div>
          <div className='social-icons'>
            <a href='https://github.com/salonigour1' target='_blank'>
              <FaGithub />
            </a>
          </div>
          <div className='social-icons'>
            <a
              href='https://mail.google.com/mail/?view=cm&fs=1&to=salonigour02100@gmail.com'
              target='_blank'
            >
              <IoIosMail />
            </a>
          </div>
          <div className='social-icons'>
            <a href='https://twitter.com/tia97973' target='_blank'>
              <BsTwitterX />
            </a>
          </div>
          <footer>©Saloni Gour. All Rights Reserved</footer>
        </section>
      </main>
    </div>
  );
}

export default Homepage;
