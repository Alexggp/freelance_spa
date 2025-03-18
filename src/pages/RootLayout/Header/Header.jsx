import React, { useEffect, useState } from 'react';
import classes from './Header.module.css';
import CustomIcon from '../../../components/CustomIcon/CustomIcon';
import Logo from '../Logo/Logo';
import MenuIcon from '../../../assets/icons/svg/menu.svg?react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling Down - Oculta el Header
        setIsVisible(false);
      } else {
        // Scrolling Up - Muestra el Header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`${classes.Header} ${isVisible ? classes.visible : classes.hidden}`}>
      <div className={classes.Box}>
        <Logo />
        <CustomIcon Icon={MenuIcon} onClick={() => alert('menu')} />
      </div>
    </div>
  );
};

export default Header;