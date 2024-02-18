import React from 'react';
import Menu from './Menu';
import '../scss/Homepage.scss';

function Layout({ children }) {
  return (
    <>
      <Menu />
      <div className='layout'>{children}</div>
    </>
  );
}

export default Layout;
