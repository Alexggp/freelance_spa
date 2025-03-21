import React, { useEffect, useState } from 'react';
import classes from './Header.module.css';
import Logo from '../Logo/Logo';
import MenuIcon from '../../../assets/icons/svg/menu.svg';
import { useCursor } from '../../../contexts/CursorContext';

const Header = ({toggleMenu}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { setCursorType } = useCursor();

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
    <header className={`${classes.Header} ${isVisible ? classes.visible : classes.hidden}`}>
      <div className={classes.Box}>
        <Logo />
        <button className={classes.IconContainer}
          onClick={toggleMenu}
          onMouseEnter={() => setCursorType("pointer")}
          onMouseLeave={() => setCursorType("default")}
        >
          <img src={MenuIcon}/>
        </button>
      </div>
    </header>
  );
};

export default Header;