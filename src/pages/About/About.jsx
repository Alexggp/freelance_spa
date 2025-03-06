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

    // 🔥 Aplicamos la posición correcta en GSAP para evitar conflictos
    gsap.set(imageRef.current, { 
      left: '19%', 
      top: '50%', 
      height: '75vh', 
      width: 'auto', 
      transform: 'translateY(-50%)' 
    });

    // Animación de zoom sin mover la imagen de posición
    const animation = gsap.to(imageRef.current, {
      scale: 3,
      opacity: 0,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=800px',
        scrub: 1.5,
      },
    });

    return () => {
      animation.kill(); // 🔥 Eliminamos la animación al desmontar el componente
    };
  }, []);

  return (
    <div ref={containerRef} className={classes.AboutPage}>
      <img ref={imageRef} className={classes.Portrait} src={portrait} alt="Alejandro" />
      <div className={classes.Spacer}></div>
    </div>
  );
}

export default About;
