import React from 'react';
import classes from './Footer.module.css';
import CustomIcon from '../../../components/CustomIcon/CustomIcon';
import Logo from '../Logo/Logo';
import MenuIcon from '../../../assets/icons/svg/menu.svg?react';

const Footer = () => {


  const email = 'alejandro.gg.perez@gmail.com'
  return (
    <div className={classes.Footer}>
      <div className={classes.Box}>
        <div className={classes.LeftStack}>
          <Logo />
          <span onClick={() => {navigator.clipboard.writeText(email)}}>{email}</span>
        </div>
        <div className={classes.RightStack}>
          <CustomIcon Icon={MenuIcon} onClick={() => alert('menu')} />
        </div>
      </div>
    </div>
  );
};

export default Footer;