import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <header
        style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}
      >
        <Link to={'/'}>Home</Link>
        <Link to={'/blog'}>Blog</Link>
        <Link to={'about/'}>About</Link>
      </header>
      <Outlet />
      <footer>2023</footer>
    </div>
  );
};

export default Layout;
