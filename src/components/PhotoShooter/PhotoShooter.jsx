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

const INTERVAL_MS = 800; // 800ms entre cada imagen
const FADE_OUT_MS = 2000; // 2 segundos antes de desaparecer
const ROTATION_RANGE = 20; // Rango de -20° a 20°

const getSinusoidalRotation = (index) => {
  return Math.sin(index * (Math.PI / 6)) * ROTATION_RANGE; // Oscila suavemente entre -20° y 20°
};

const PhotoShooter = () => {
  const [visiblePhotos, setVisiblePhotos] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0); // Índice de la imagen actual
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isAnimating) {
      intervalRef.current = setInterval(() => {
        const newPhoto = { 
          src: shuffledPhotos[photoIndex], 
          id: photoIndex, 
          rotation: getSinusoidalRotation(photoIndex) 
        };

        setVisiblePhotos((prev) => [...prev, newPhoto]);

        // Programar la eliminación de la imagen después de FADE_OUT_MS
        setTimeout(() => {
          setVisiblePhotos((current) => current.filter((photo) => photo.id !== newPhoto.id));
        }, FADE_OUT_MS);

        // Incrementar el índice y reiniciarlo si llegamos al final
        setPhotoIndex((prevIndex) => (prevIndex + 1) % shuffledPhotos.length);
      }, INTERVAL_MS);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAnimating, photoIndex]);

  return (
    <div
      className={classes.photoShooterContainer}
      onMouseEnter={() => setIsAnimating(true)}
      onMouseLeave={() => setIsAnimating(false)}
    >
      {visiblePhotos.map((photo, index) => (
        <div
          key={photo.id}
          className={`${classes.photoContainer} ${classes.scaleIn}`}
          style={{
            "--rotation": `${photo.rotation}deg`,
            zIndex: index + 1,
          }}
        >
          <img src={photo.src} alt="Photo" className={classes.image} />
        </div>
      ))}
    </div>
  );
};

export default PhotoShooter;
