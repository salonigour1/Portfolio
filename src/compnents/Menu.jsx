import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../scss/Menu.scss';
function Menu() {
  const location = useLocation();
  console.log(location);
  const isActive = (path) => location.pathname === path;
  return (
    <div>
      <nav className='nav'>
        <ul className='menu-nav'>
          <li className='menu-nav__item'>
            <Link
              to='/'
              className={`menu-nav__link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className='menu-nav__item'>
            <Link
              to='/about'
              className={`menu-nav__link ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
          <li className='menu-nav__item'>
            <Link
              to='/projects'
              className={`menu-nav__link ${
                isActive('/projects') ? 'active' : ''
              }`}
            >
              My Projects
            </Link>
          </li>
          <li className='menu-nav__item'>
            <Link
              to='/contact'
              className={`menu-nav__link ${
                isActive('/contact') ? 'active' : ''
              }`}
            >
              Contact Me
            </Link>
          </li>
          <li className='menu-nav__item'>
            <a
              className='manu-nav__link'
              href='https://drive.google.com/file/d/1gfIwLr2KXlzDeab9uIIsSJuOJmmkxRmw/view?usp=sharing'
              target='blank'
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
