import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import classes from './About.module.css';
import portrait from '../../assets/about_images/portrait.jpg';
import background1 from '../../assets/about_images/background1.jpg';
import background2 from '../../assets/about_images/background2.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { t } = useTranslation('global');
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const storyRef = useRef(null);
  const background1Ref = useRef(null);
  const background2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=800px',
        scrub: 1,
      },
    });

    tl.to(imageRef.current, {
      scale: 3,
      opacity: 0,
      x: '-10vw',
      ease: 'power2.out'
    });

    tl.to(textRef.current, {
      x: () => gsap.utils.random(-300, 300),
      y: () => gsap.utils.random(-300, 300),
      opacity: 0,
      ease: 'power2.out'
    }, '<');

    tl.to(storyRef.current, {
      scale: 3,
      opacity: 0,
      ease: 'power2.out'
    }, '-=0.5');

    gsap.to([background1Ref.current, background2Ref.current], {
      scale: 1.5,
      opacity: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=1000px',
        scrub: 1,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className={classes.AboutPage}>
      <img ref={imageRef} className={classes.Portrait} src={portrait} alt="Alejandro" />
      <h1 ref={textRef} className={classes.Title}>
        SOY ALEJANDRO<br/>ARQUITECTO WEB
      </h1>
      <h2 ref={storyRef} className={classes.StoryText}>Y ESTA ES MI HISTORIA</h2>
      <img ref={background1Ref} className={classes.BackgroundImage} src={background1} alt="Background 1" />
      <img ref={background2Ref} className={classes.BackgroundImage} src={background2} alt="Background 2" />
    </div>
  );
}

export default About;
