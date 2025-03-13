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

const INTERVAL_MS = 500; // 800ms entre cada imagen
const FADE_OUT_MS = 2000; // Tiempo de la animación antes de eliminar la imagen
const ROTATION_RANGE = 20; // Rango de -20° a 20°

const getSinusoidalRotation = (index) => {
  return Math.sin(index * (Math.PI / 6)) * ROTATION_RANGE; // Oscila suavemente entre -20° y 20°
};

const PhotoShooter = () => {
  const [visiblePhotos, setVisiblePhotos] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const containerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 }); // Eliminamos useState y usamos useRef
  const intervalRef = useRef(null);

  // Guardar la posición del ratón en la referencia sin hacer re-render
  const handleMouseMove = (event) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    mousePos.current.x = event.clientX - rect.left;
    mousePos.current.y = event.clientY - rect.top;
  };

  useEffect(() => {
    if (isAnimating) {
      intervalRef.current = setInterval(() => {
        const newPhoto = { 
          src: shuffledPhotos[photoIndex], 
          id: photoIndex, 
          rotation: getSinusoidalRotation(photoIndex),
          left: mousePos.current.x, // Posición exacta del ratón
          top: mousePos.current.y,
        };

        setVisiblePhotos((prev) => [...prev, newPhoto]);

        // 🔴 ELIMINAR la imagen después de FADE_OUT_MS
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
            zIndex: photo.id + 1,
          }}
        >
          <img src={photo.src} alt="Photo" className={classes.image} />
        </div>
      ))}
    </div>
  );
};

export default PhotoShooter;
