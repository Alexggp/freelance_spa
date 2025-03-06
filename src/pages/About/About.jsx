import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import classes from './About.module.css';
import portrait from '../../assets/about_images/portrait.jpg';
import background1 from '../../assets/about_images/background1.jpg';
import background2 from '../../assets/about_images/background2.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const storyTextRef = useRef(null);
  const backgroundRef1 = useRef(null);
  const backgroundRef2 = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current || !textRef.current || !storyTextRef.current || !backgroundRef1.current || !backgroundRef2.current) return;

    const scrollHeight = window.innerHeight * 3;

    gsap.set(imageRef.current, { 
      left: '19%', 
      top: '50%', 
      height: '75vh', 
      width: 'auto', 
      transform: 'translateY(-50%)',
      zIndex: 3
    });

    gsap.set(textRef.current, { 
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      opacity: 1,
      zIndex: 4
    });

    gsap.set(storyTextRef.current, { 
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      opacity: 0, // 🔥 No es visible al inicio
      zIndex: 4
    });

    gsap.set(backgroundRef1.current, { 
      right: '19%', 
      top: '50%', 
      height: '75vh', 
      width: 'auto', 
      transform: 'translateY(-50%)', 
      opacity: 0,
      zIndex: 2
    });

    gsap.set(backgroundRef2.current, { 
      left: '10%', 
      top: '50%', 
      height: '75vh', 
      width: 'auto', 
      transform: 'translateY(-50%)', 
      opacity: 0,
      zIndex: 1
    });

    ScrollTrigger.normalizeScroll(true);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${scrollHeight}`,
        scrub: 1,
      },
    });

    tl.to(imageRef.current, {
      scale: 3,
      opacity: 0,
      ease: 'power1.out'
    });

    tl.to(textRef.current, { 
      opacity: 0,
      ease: 'power1.out'
    }, '<'); // 🔥 El texto principal desaparece junto con el portrait

    // 🔥 Paso intermedio: Aparece "Y ESTA ES MI HISTORIA"
    tl.to(storyTextRef.current, {
      opacity: 1,
      ease: 'power1.out'
    });

    // 🔥 Luego desaparece antes de que aparezca background1
    tl.to(storyTextRef.current, {
      opacity: 0,
      ease: 'power1.out'
    });

    tl.to(backgroundRef1.current, {
      opacity: 1,
      ease: 'power1.out'
    });

    tl.to(backgroundRef1.current, {
      scale: 3,
      opacity: 0,
      ease: 'power1.out'
    });

    tl.to(backgroundRef2.current, {
      opacity: 1,
      ease: 'power1.out'
    }, '-=0.5');

    tl.to(backgroundRef2.current, {
      scale: 3,
      opacity: 0,
      ease: 'power1.out'
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className={classes.AboutPage}>
      <h1 ref={textRef} className={classes.Title}>
        SOY ALEJANDRO.<br/>ARQUITECTO WEB.
      </h1>
      <h2 ref={storyTextRef} className={classes.StoryText}>
        Y ESTA ES MI HISTORIA
      </h2>
      <img ref={imageRef} className={classes.Portrait} src={portrait} alt="Alejandro" />
      <img ref={backgroundRef1} className={classes.Background} src={background1} alt="Background 1" />
      <img ref={backgroundRef2} className={classes.BackgroundSmall} src={background2} alt="Background 2" />
      <div className={classes.Spacer}></div>
    </div>
  );
}

export default About;
