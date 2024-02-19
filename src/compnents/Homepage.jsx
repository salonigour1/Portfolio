import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../scss/Homepage.scss';

import Footer from './Footer';

function Homepage() {
  const sectionRef = useRef(null);

  function scrollToSection() {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <button className='tesyyy' onClick={scrollToSection}>
        Button footer
      </button>
      <header>
        <div className='menu-btn'>
          <span className='menu-btn__burger'></span>
        </div>
      </header>
      <main>
        <section className='home'>
          <h2>Hi ! My Name Is</h2>
          <h1 className='main__name'>
            Saloni <span className='main__name--last'>Gour</span>
          </h1>
        </section>

        <div id='footerr'>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Homepage;
