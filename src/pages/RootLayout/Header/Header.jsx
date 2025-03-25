import React, { useEffect, useState } from 'react';
import classes from './Header.module.css';
import Logo from '../Logo/Logo';
import MenuIcon from '../../../assets/icons/svg/menu.svg';
import CloseIcon from '../../../assets/icons/svg/close.svg';

import { useCursorOnHoverArea } from '../../../hooks/useCursorOnHoverArea';

const Header = ({toggleMenu, menuIsVisible}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const refCursor = useCursorOnHoverArea({
    enterType: "pointer",
    leaveType: "default"
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!menuIsVisible && currentScrollY > lastScrollY && currentScrollY > 50) {
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
    <header className={`${classes.Header} ${isVisible ? classes.visible : classes.hidden} ${menuIsVisible ? classes.MenuStyle : null}`}>
      <div className={classes.Box}>
        <Logo />
        <button className={classes.IconContainer}
          onClick={toggleMenu}
          ref={refCursor}
        >
          <img src={menuIsVisible ? CloseIcon : MenuIcon}/>
        </button>
      </div>
    </header>
  );
};

export default Header;