import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import classes from './About.module.css';
import portrait from '../../assets/about_images/portrait.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    gsap.to(imageRef.current, {
      scale: 3, // 🔥 Solo aumenta de tamaño, sin moverse
      opacity: 0,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=800px',
        scrub: 1.5, // Suaviza la animación
      },
    });
  }, []);

  return (
    <div ref={containerRef} className={classes.AboutPage}>
      <img ref={imageRef} className={classes.Portrait} src={portrait} alt="Alejandro" />
      {/* Spacer para permitir scroll */}
      <div className={classes.Spacer}></div>
    </div>
  );
}

export default About;
