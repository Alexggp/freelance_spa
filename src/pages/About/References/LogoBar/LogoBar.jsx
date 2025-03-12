import React from "react";
import { useMediaQuery } from 'react-responsive'


import { useMousePositionSideSlide } from "../../../../hooks/useMousePositionSideSlide";
import classes from './LogoBar.module.css';

import cocacolaLogo from './../../../../assets/references/cocacola.png';
import inditexLogo from './../../../../assets/references/inditex.png';
import mutuaLogo from './../../../../assets/references/mutua.png';
import telefonicaLogo from './../../../../assets/references/telefonica.png';
import gobiernoLogo from './../../../../assets/references/gobierno.png';
import santanderLogo from './../../../../assets/references/santander.png';
import iberiaLogo from './../../../../assets/references/iberia.png';
import shellLogo from './../../../../assets/references/shell.png';




const LogoBar = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 820px)' })
  const scrollRef = useMousePositionSideSlide();


  const content = <>
    <div className={classes.LogoContainer}>
      <img src={inditexLogo} style={{ height: "50%", marginTop: '5%' }} alt='Inditex'></img>
    </div>
    <div className={classes.LogoContainer}>
      <img src={iberiaLogo} alt='Iberia'></img>
    </div>
    <div className={classes.LogoContainer}>
      <img src={santanderLogo} alt='Banco Santander'></img>
    </div>
    <div className={classes.LogoContainer}>
      <img src={cocacolaLogo} alt='Cocacola'></img>
    </div>
    <div className={classes.LogoContainer}>
      <img src={gobiernoLogo} alt='Gobierno de España'></img>
    </div>
    <div className={classes.LogoContainer} style={{padding: '25px 0'}}>
      <img onClick={()=>alert('conchas')} src={shellLogo} alt='ShellOil' style={{cursor: 'pointer'}}></img>
    </div>
    <div className={classes.LogoContainer}>
      <img src={telefonicaLogo} alt='Telefónica'></img>
    </div>
    <div className={classes.LogoContainer}>
      <img src={mutuaLogo} alt='Mutua Madrileña'></img>
    </div>

  </>



  return (
    <div className={classes.LogoBarContainer}>
      {
        !isTabletOrMobile ? (
          <div id="LogoBarDesktop" ref={scrollRef} className={classes.LogoBar}>
            {content}
          </div>
        ) : (
          <div id="LogoBarMobile" className={classes.LogoBar}>
            {content}
          </div>
        )
      }
      </div>


  );
}

export default LogoBar;