import React, { useRef, useEffect } from 'react';
import classes from './ImageDiscover.module.css';

/**
 * Componente que muestra una imagen base con una superposición 
 * que se revela dinámicamente con el movimiento del mouse.
 *
 * @param {string} baseImage - Imagen de fondo (visible siempre).
 * @param {string} overlayImage - Imagen que se descubre con el mouse.
 * @param {number} [sizeFactor=10] - Tamaño del área descubierta en vw.
 * @example
 * <ImageDiscover baseImage={FaroAzul} overlayImage={FaroDorado} sizeFactor={10} />
 */
const ImageDiscover = ({ baseImage, overlayImage, sizeFactor = 10 }) => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;

    if (!container || !overlay) return;

    overlay.style.clipPath = `circle(0px at 0px 0px)`;

    const getCircleSize = () => `${(window.innerWidth * sizeFactor) / 100}px`;

    const updateMousePosition = (e) => {
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const circleSize = getCircleSize();
      overlay.style.clipPath = `circle(${circleSize} at ${x}px ${y}px)`;
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      overlay.style.clipPath = `circle(0px at 0px 0px)`;
    };

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const { x, y } = lastMousePos.current;
      const circleSize = getCircleSize();

      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        const relativeX = x - rect.left;
        const relativeY = y - rect.top;
        overlay.style.clipPath = `circle(${circleSize} at ${relativeX}px ${relativeY}px)`;
      } else {
        overlay.style.clipPath = `circle(0px at 0px 0px)`;
      }
    };

    document.addEventListener('mousemove', updateMousePosition);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Para recalcular tamaño en resize

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sizeFactor]);

  return (
    <div ref={containerRef} className={classes.Container}>
      {/* Imagen base */}
      <img className={classes.Image} src={baseImage} alt="Imagen base" />

      {/* Imagen superpuesta con máscara dinámica */}
      <img ref={overlayRef} className={classes.ImageOverlay} src={overlayImage} alt="Imagen oculta" />
    </div>
  );
};

export default ImageDiscover;
