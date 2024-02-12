import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Homepage.scss';

function Homepage() {
  return (
    <div>
      <div className='test'>Cjdjdklk</div>
      <header>
        <div className='menu-btn'>
          <span className='menu-btn__burger'></span>
        </div>
        <nav className='nav'>
          <ul className='menu-nav'>
            <li className='menu-nav__item active'>
              <Link to='/' className='menu-nav__link'>
                Home
              </Link>
            </li>
            <li className='menu-nav__item'>
              <Link to='/about' className='manu-nav__link'>
                About
              </Link>
            </li>
            <li className='menu-nav__item'>
              <Link to='/projects' className='manu-nav__link'>
                My Projects
              </Link>
            </li>
            <li className='menu-nav__item'>
              <Link to='/contact' className='manu-nav__link'>
                Contact Me
              </Link>
            </li>
            {/* <li className='menu-nav__item'>
              <Link to='/contact' className='manu-nav__link'>
                Resume
              </Link>
            </li> */}
          </ul>
        </nav>
      </header>
      <main>
        <section className='home'>
          <h2>Hi ! My Name Is</h2>
          <h1 className='main__name'>
            Saloni <span className='main_name--last'>Gour</span>
          </h1>
        </section>
      </main>
    </div>
  );
}

export default Homepage;
