import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../scss/Menu.scss';
function Menu() {
  const location = useLocation();
  console.log(location);
  const [scrolling, setScrolling] = useState(false);
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  });
  //footerr
  function handleScrollToSection(id) {
    console.log(id);
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div>
      <nav className={`nav ${scrolling ? 'scroll' : ''}`}>
        <div className='menu-nav'>
          <div className='title'>Saloni Gour</div>
          <ul className='menu-list'>
            <li className='menu-nav__item'>
              <a
                href='#'
                className={`menu-nav__link ${isActive('/') ? 'active' : ''}`}
              >
                About
              </a>
            </li>
            <li className='menu-nav__item'>
              <a
                href='skills'
                className={`menu-nav__link ${
                  isActive('/skills') ? 'active' : ''
                }`}
                onClick={() => handleScrollToSection('Skills')}
              >
                Skills
              </a>
            </li>
            {/* <li className='menu-nav__item'>
            <Link
              to='/about'
              className={`menu-nav__link ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
          </li> */}
            <li className='menu-nav__item'>
              <a
                href='#'
                className={`menu-nav__link ${
                  isActive('/projects') ? 'active' : ''
                }`}
              >
                My Projects
              </a>
            </li>

            <li className='menu-nav__item'>
              <a
                className={`menu-nav__link ${
                  isActive('/projects') ? 'active' : ''
                }`}
                href='https://drive.google.com/file/d/1gfIwLr2KXlzDeab9uIIsSJuOJmmkxRmw/view?usp=sharing'
                target='blank'
              >
                Resume
              </a>
            </li>
            <li className='menu-nav__item'>
              <a
                href='#'
                onClick={() => handleScrollToSection('footerr')}
                // to='/contact'
                // className={`menu-nav__link ${
                //   isActive('/contact') ? 'active' : ''
                // }`}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
