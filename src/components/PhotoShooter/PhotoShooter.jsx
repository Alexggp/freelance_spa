import { useState, useEffect, useRef } from "react";
import classes from "./PhotoShooter.module.css";

// Importar todas las imágenes de la carpeta automáticamente
const photos = Object.values(import.meta.glob("/src/assets/photo_lake/*.jpg", { eager: true }))
  .map((mod) => mod.default);

// Función para desordenar un array con Fisher-Yates
const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const shuffledPhotos = shuffleArray(photos); // Desordenamos las imágenes al cargar

const INTERVAL_MS = 300; // 300ms entre cada imagen
const FADE_OUT_MS = 2000; // 2 segundos antes de desaparecer
const ROTATION_RANGE = 20; // Rango de -20° a 20°

const PhotoShooter = () => {
  const [visiblePhotos, setVisiblePhotos] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const containerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const prevMouseX = useRef(0); // Guardar la posición anterior del ratón
  const intervalRef = useRef(null);
  const globalZIndex = useRef(1); // Z-index global que siempre aumenta

  // Guardar la posición del ratón en la referencia sin hacer re-render
  const handleMouseMove = (event) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    mousePos.current.x = event.clientX - rect.left;
    mousePos.current.y = event.clientY - rect.top;
  };

  const getRotationByMouseDirection = () => {
    const deltaX = mousePos.current.x - prevMouseX.current; // Diferencia de posición del ratón

    let rotation;
    if (deltaX > 0) {
      // Movimiento a la derecha (entre 0° y 20°)
      rotation = Math.random() * ROTATION_RANGE;
    } else {
      // Movimiento a la izquierda (entre 0° y -20°)
      rotation = -Math.random() * ROTATION_RANGE;
    }

    prevMouseX.current = mousePos.current.x; // Guardamos la posición actual como referencia
    return rotation;
  };

  useEffect(() => {
    if (isAnimating) {
      intervalRef.current = setInterval(() => {
        const newPhoto = { 
          src: shuffledPhotos[photoIndex], 
          id: photoIndex, 
          rotation: getRotationByMouseDirection(), // Se usa la dirección del ratón
          left: mousePos.current.x, // Posición exacta del ratón
          top: mousePos.current.y,
          zIndex: globalZIndex.current++, // Incrementar el Z-index global
        };

        setVisiblePhotos((prev) => [...prev, newPhoto]);

        // ELIMINAR la imagen después de FADE_OUT_MS
        setTimeout(() => {
          setVisiblePhotos((current) => current.filter((photo) => photo.id !== newPhoto.id));
        }, FADE_OUT_MS);

        setPhotoIndex((prevIndex) => (prevIndex + 1) % shuffledPhotos.length);
      }, INTERVAL_MS);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAnimating, photoIndex]); // Eliminamos mousePos del array de dependencias

  return (
    <div
      ref={containerRef}
      className={classes.photoShooterContainer}
      onMouseEnter={() => setIsAnimating(true)}
      onMouseLeave={() => setIsAnimating(false)}
      onMouseMove={handleMouseMove} // Solo actualiza el ref, sin causar renders
    >
      {visiblePhotos.map((photo) => (
        <div
          key={photo.id}
          className={`${classes.photoContainer} ${classes.scaleIn}`}
          style={{
            "--rotation": `${photo.rotation}deg`,
            top: `${photo.top}px`,
            left: `${photo.left}px`,
            zIndex: photo.zIndex, // Se usa el Z-index global
          }}
        >
          <img src={photo.src} alt="Photo" className={classes.image} />
        </div>
      ))}
    </div>
  );
};

export default PhotoShooter;
