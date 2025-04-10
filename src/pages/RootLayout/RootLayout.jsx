import React, {useState} from 'react';
import { Outlet } from 'react-router';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Menu from './Menu/Menu';
import StickyBanner from './StickyBanner/StickyBanner';

const RootLayout = () => {

  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!isMenuVisible);

  return (
    <div style={{position:'relative'}}>
      <Header toggleMenu={toggleMenu} menuIsVisible={isMenuVisible}/>
      <Menu toggleMenu={toggleMenu} isVisible={isMenuVisible}/>
      <Outlet />
      <StickyBanner />
      {!isMenuVisible && <Footer />}
    </div>
  );

}

export default RootLayout;
