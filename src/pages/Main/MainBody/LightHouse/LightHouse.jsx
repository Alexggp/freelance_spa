import React, { useRef, useEffect } from 'react';
import classes from './LightHouse.module.css';
import FaroImg from '../../../../assets/faro-azul.png';
import FaroImg2 from '../../../../assets/faro-dorado.png';

const LightHouse = () => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;

    if (!container || !overlay) return;

    // 🔹 Oculta la imagen dorada al inicio
    overlay.style.clipPath = `circle(0px at 0px 0px)`;

    const updateMousePosition = (e) => {
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      overlay.style.clipPath = `circle(50px at ${x}px ${y}px)`;
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      overlay.style.clipPath = `circle(0px at 0px 0px)`;
    };

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const { x, y } = lastMousePos.current;

      // Verifica si el puntero sigue dentro de la imagen tras el scroll
      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        const relativeX = x - rect.left;
        const relativeY = y - rect.top;

        overlay.style.clipPath = `circle(50px at ${relativeX}px ${relativeY}px)`;
      } else {
        overlay.style.clipPath = `circle(0px at 0px 0px)`;
      }
    };

    document.addEventListener('mousemove', updateMousePosition);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className={classes.Container}>
      <div className={classes.Trigger} onClick={()=>alert('conchas!')}></div>
      {/* Imagen de fondo (Azul) */}
      <img className={classes.Image} src={FaroImg} alt="Faro Azul" />

      {/* Imagen superior (Dorado) con máscara redonda dinámica */}
      <img ref={overlayRef} className={classes.ImageOverlay} src={FaroImg2} alt="Faro Dorado" />
    </div>
  );
};

export default LightHouse;
