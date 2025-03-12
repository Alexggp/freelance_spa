import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

import classes from './AboutIntro.module.css';
import portrait from '../../../assets/about_images/portrait.jpg';
import background1 from '../../../assets/about_images/background1.jpg';
import background2 from '../../../assets/about_images/background2.jpg';
import background3 from '../../../assets/about_images/background3.jpg';
import background4 from '../../../assets/about_images/background4.jpg';
import Logo from '../../../components/Logo/Logo';


gsap.registerPlugin(ScrollTrigger);

const AboutIntro = () => {
  const { t } = useTranslation('global');
  const containerRef = useRef(null);
  const portraitRef = useRef(null);
  const textRef = useRef(null);
  const storyTextRef = useRef(null);
  const backgroundRef1 = useRef(null);
  const backgroundRef2 = useRef(null);
  const backgroundRef3 = useRef(null);
  const backgroundRef4 = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !portraitRef.current || !textRef.current || !storyTextRef.current || !backgroundRef1.current || !backgroundRef2.current || !backgroundRef3.current || !backgroundRef4.current || !logoRef.current) return;

    const scrollHeight = window.innerHeight * 4;

 
    gsap.set(logoRef.current, { 
      left: '50%',
      top: '50%',
      scale: 2,
      transform: 'translate(-50%, -50%)',
      opacity: 0,
      zIndex: 5
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

    tl.to(portraitRef.current, { scale: 3, opacity: 0, ease: 'power1.out' });
    tl.to(textRef.current, { opacity: 0, ease: 'power1.out' }, '<');
    tl.to(storyTextRef.current, { opacity: 1, ease: 'power1.out' });
    tl.to(storyTextRef.current, { opacity: 0, ease: 'power1.out' });

    tl.to(backgroundRef1.current, { opacity: 1, ease: 'power1.out' });
    tl.to(backgroundRef1.current, { scale: 3, opacity: 0, ease: 'power1.out' });

    tl.to(backgroundRef2.current, { opacity: 1, ease: 'power1.out' }, '-=0.5');
    tl.to(backgroundRef2.current, { scale: 3, opacity: 0, ease: 'power1.out' });

    tl.to(backgroundRef3.current, { opacity: 1, ease: 'power1.out' }, '-=0.5');
    tl.to(backgroundRef3.current, { scale: 3, opacity: 0, ease: 'power1.out' });

    tl.to(backgroundRef4.current, { opacity: 1, ease: 'power1.out' }, '-=0.5');
    tl.to(backgroundRef4.current, { scale: 3, opacity: 0, ease: 'power1.out' });

    tl.to(logoRef.current, { opacity: 1, ease: 'power1.out' });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className={classes.AboutIntro}>
      <h1 ref={textRef} className={classes.Title}>{t('aboutIntro.title')}</h1>
      <h2 ref={storyTextRef} className={classes.StoryText}>{t('aboutIntro.story')}</h2>
      <img ref={portraitRef} className={classes.Portrait} src={portrait} alt="Alejandro" />
      <img ref={backgroundRef1} className={classes.Background} src={background1} alt="Background 1" />
      <img ref={backgroundRef2} className={classes.BackgroundLeft} src={background2} alt="Background 2" />
      <img ref={backgroundRef3} className={classes.BackgroundRight} src={background3} alt="Background 3" />
      <img ref={backgroundRef4} className={classes.BackgroundLeft} src={background4} alt="Background 4" />
      <div ref={logoRef} className={classes.Logo}><Logo alternative/></div>      
    </div>
  );
}

export default AboutIntro;
