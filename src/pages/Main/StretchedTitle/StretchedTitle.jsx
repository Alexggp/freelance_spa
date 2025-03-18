import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import classes from './StretchedTitle.module.css';

gsap.registerPlugin(ScrollTrigger);

const StretchedTitle = () => {
  const { t } = useTranslation('global');
  const containerRef = useRef(null);
  const spacerRef = useRef(null); // Espaciador dinámico para mantener el flujo del documento

  useEffect(() => {
    const container = containerRef.current;
    const spacer = spacerRef.current;

    const originalHeight = container.offsetHeight;
    const scaledHeight = originalHeight * 3; // Calculamos la altura real después del scaleY

    // Ajustamos dinámicamente el espaciador para que el contenido siguiente no se solape
    spacer.style.height = `${scaledHeight - originalHeight}px`;

    gsap.to(container, {
      scaleY: 3,
      transformOrigin: "top",
      scrollTrigger: {
        id: 'StretchingTitle',
        trigger: container,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: true
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
