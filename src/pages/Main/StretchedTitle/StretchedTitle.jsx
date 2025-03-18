import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useScreenSize from '../../../hooks/useScreenSize';

import classes from './StretchedTitle.module.css';

gsap.registerPlugin(ScrollTrigger);

const StretchedTitle = () => {
  const { t } = useTranslation('global');
  const containerRef = useRef(null);
  const spacerRef = useRef(null);
  const { isDesktop } = useScreenSize();

  useEffect(() => {
    const container = containerRef.current;
    const spacer = spacerRef.current;

    const scaleConstant = isDesktop ? 1.5 : 1.2;
    const originalHeight = container.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scaleFactor = (viewportHeight / originalHeight)*scaleConstant; // Factor de escalado
    const scrollDuration = viewportHeight - (viewportHeight*(scaleConstant/10)); // Duración del scroll basada en la altura de la pantalla
   

    // Ajustamos el espaciador para que el contenido siguiente no se solape
    spacer.style.height = `${scrollDuration}px`;

    gsap.to(container, {
      scaleY: scaleFactor, // Escala hasta ocupar el alto de la pantalla
      transformOrigin: "top",
      scrollTrigger: {
        id: 'StretchingTitle',
        trigger: container,
        start: "top center",
        start: originalHeight,
        end: `+=${scrollDuration}`, // Duración del scroll
        scrub: true,
        markers: false
      }
    });

    return () => {
      gsap.killTweensOf(container);
      spacer.style.height = ""; // Restaurar el espaciador al desmontar
    };
  }, []);

  return (
    <div>
      <div ref={containerRef} className={classes.StretchedTitle}>
        <span className={classes.Stretchable}>{t('main.StretchedTitle')}</span>
      </div>
      <div ref={spacerRef} aria-hidden="true"></div> {/* Espaciador dinámico */}
    </div>
  );
};

export default StretchedTitle;
