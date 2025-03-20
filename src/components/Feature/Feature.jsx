import React, { useState } from 'react';
import classes from './Feature.module.css';
import { useTranslation } from 'react-i18next';
import image from '../../assets/features/web_design.jpg';
import { useCursor } from '../../contexts/CursorContext';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import useScreenSize from '../../hooks/useScreenSize';


const Feature = () => {
  const [imageIsVisible, setImageIsVisible] = useState(false);
  const { t } = useTranslation('global');
  const { setCursorType } = useCursor();
  const parallaxRef = useMouseParallax(imageIsVisible, 60); 
  const {isDesktop} = useScreenSize();

  const handleImageVisibility = (val) =>{
    if (!isDesktop) return;
    setImageIsVisible(val)
  }

  return (
    <div className={classes.Feature}>
      <div
        className={classes.ActiveArea}
        onMouseEnter={() => handleImageVisibility(true)}
        onMouseLeave={() => handleImageVisibility(false)}
      >
        <div className={classes.FeatureContainer}>
          <div className={classes.Title}>
            Diseño WEB
          </div>
        </div>

        {imageIsVisible && (
          <div
            ref={parallaxRef} // Aplica el efecto de parallax a esta imagen
            className={classes.ImageContainer}
            onClick={() => alert('feature')}
            onMouseEnter={() => setCursorType("pointer")}
            onMouseLeave={() => setCursorType("default")}
          >
            <img src={image} alt="Web Design" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Feature;
