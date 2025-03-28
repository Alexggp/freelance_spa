import { useState, useEffect, useRef } from "react";
import classes from "./PhotoShooter.module.css";

// Función para desordenar un array con Fisher-Yates
const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const importPhotos = async (photosUrl) => {
  let images;
  switch (photosUrl) {
    case "main":
      images = import.meta.glob('/src/assets/photo_lake/*.jpg', { eager: true });
      break;
    case "about":
      images = import.meta.glob('/src/assets/about_photo_lake/*.jpg', { eager: true });
      break;
    // Add more cases as needed
    default:
      images = {};
  }
  return shuffleArray(Object.values(images).map((mod) => mod.default));
};

const PhotoShooter = ({ fixed = false, photosUrl, intervalMs = 300 }) => {
  const [photos, setPhotos] = useState([]);
  
  useEffect(() => {
    const loadPhotos = async () => {
      const importedPhotos = await importPhotos(photosUrl);
      setPhotos(importedPhotos);
    };
    loadPhotos();
  }, [photosUrl]);

  const FADE_OUT_MS = 2000; // 2 segundos antes de desaparecer
  const ROTATION_RANGE = 20; // Rango de -20° a 20°

  const [visiblePhotos, setVisiblePhotos] = useState([]);
  const [isAnimating, setIsAnimating] = useState(fixed); // Si fixed, siempre animado
  const [photoIndex, setPhotoIndex] = useState(0);
  const containerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const prevMouseX = useRef(0);
  const intervalRef = useRef(null);
  const globalZIndex = useRef(1);

  // Si fixed es true, el centro del contenedor es la posición fija
  const getFixedPosition = () => {
    if (!containerRef.current) return { x: 0, y: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return { x: rect.width / 2, y: rect.height / 2 };
  };

  // Captura la posición del mouse si fixed es false
  const handleMouseMove = (event) => {
    if (fixed || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mousePos.current.x = event.clientX - rect.left;
    mousePos.current.y = event.clientY - rect.top;
  };

  const getRotationByMouseDirection = () => {
    if (fixed) {
      return Math.random() * (ROTATION_RANGE * 2) - ROTATION_RANGE; // Rotación aleatoria en fixed
    }

    const deltaX = mousePos.current.x - prevMouseX.current;
    let rotation = deltaX > 0
      ? Math.random() * ROTATION_RANGE
      : -Math.random() * ROTATION_RANGE;

    prevMouseX.current = mousePos.current.x;
    return rotation;
  };

  useEffect(() => {
    if (isAnimating) {
      intervalRef.current = setInterval(() => {
        const position = fixed ? getFixedPosition() : mousePos.current;

        const newPhoto = { 
          src: photos[photoIndex], 
          id: photoIndex, 
          rotation: getRotationByMouseDirection(),
          left: position.x,
          top: position.y,
          zIndex: globalZIndex.current++,
        };

        setVisiblePhotos((prev) => [...prev, newPhoto]);

        setTimeout(() => {
          setVisiblePhotos((current) => current.filter((photo) => photo.id !== newPhoto.id));
        }, FADE_OUT_MS);

        setPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, intervalMs);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAnimating, photoIndex, fixed, photos, intervalMs]);

  return (
    <div
      ref={containerRef}
      className={classes.photoShooterContainer}
      onMouseEnter={() => !fixed && setIsAnimating(true)}
      onMouseLeave={() => !fixed && setIsAnimating(false)}
      onMouseMove={handleMouseMove}
    >
      {visiblePhotos.map((photo) => (
        <div
          key={photo.id}
          className={`${classes.photoContainer} ${classes.scaleIn} ${fixed && classes.Fixed}`}
          style={{
            "--rotation": `${photo.rotation}deg`,
            top: `${photo.top}px`,
            left: `${photo.left}px`,
            zIndex: photo.zIndex,
          }}
        >
          <img src={photo.src} alt="Photo" className={classes.image} />
        </div>
      ))}
    </div>
  );
};

export default PhotoShooter;
