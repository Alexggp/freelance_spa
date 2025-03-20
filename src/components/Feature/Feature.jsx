import React, { useState } from 'react';
import classes from './Feature.module.css';
import { useTranslation } from 'react-i18next';
import { useCursor } from '../../contexts/CursorContext';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import useScreenSize from '../../hooks/useScreenSize';


const Feature = ({title, image, selected}) => {
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
        onClick={!isDesktop ? selected : undefined}
      >
        <div className={classes.FeatureContainer}>
          <div className={classes.Title}>
            {title}
          </div>
        </div>

        {(!isDesktop || imageIsVisible) && (
          <div
            ref={parallaxRef} // Aplica el efecto de parallax a esta imagen
            className={classes.ImageContainer}
            onClick={selected}
            onMouseEnter={() => setCursorType("pointer")}
            onMouseLeave={() => setCursorType("default")}
          >
            <img src={image} alt={title} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Feature;
