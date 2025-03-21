import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const RootLayout = () => {

  return (
    <div style={{position:'relative'}}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );

}

export default RootLayout;
