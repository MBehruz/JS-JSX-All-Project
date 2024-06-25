import React from 'react';
import { Route, Routes } from 'react-router';
import Board from '../component/Board';
import Blog from '../componentRoot/Blog';
import About from '../componentRoot/About';
import Layout from '../componentRoot/Layout';
import Home from '../componentRoot/Home';
import NotFound from '../componentRoot/NotFound';
import HomeRegister from '../componentRegisterAuth/Home';
import Hook from '../ReactHook';

const Root = () => {
  return (
    <Routes>
      {/* <Board /> */}
      {/* <Route path='/' element={<Board />} /> */}
      {/* Board */}

      {/* Outlet */}
      {/* <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<NotFound />} />
      </Route> */}
      {/* Outlet  */}

      {/* component Auth register token */}
      {/* <Route path='/' element={<HomeRegister />} /> */}
      {/* component Auth register token */}

      {/*  */}
      <Route path='/' element={<Hook />} />
    </Routes>
  );
};

export default Root;
