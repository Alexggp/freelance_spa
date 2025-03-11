import React from 'react';
import { useTranslation } from 'react-i18next';
import Lenis from 'lenis';
import gsap from 'gsap';

import classes from './HorizontalBody.module.css';
import img1 from '../../../assets/about_images/background1.jpg';
import img2 from '../../../assets/about_images/background2.jpg';
import img3 from '../../../assets/about_images/background3.jpg';
import img4 from '../../../assets/about_images/background4.jpg';
import img5 from '../../../assets/about_images/portrait.jpg';
import img6 from '../../../assets/steps_bg.jpg';


const HorizontalBody = () => {
  const { t } = useTranslation('global');

  // const lenis = new Lenis();
  // lenis.on('scroll', ()=>{});

  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);

  return (

    <div className={classes.HorizontalBody}>
      <img src={img1}/>
      <img src={img2}/>
      <img src={img3}/>
      <img src={img4}/>
      <img src={img5}/>
      <img src={img6}/>
    </div>

  );
};

export default HorizontalBody;
