import React, { useState } from 'react';
import classes from './Feature.module.css';
import { useTranslation } from 'react-i18next';
import image from '../../assets/features/web_design.jpg';
import { useCursor } from '../../contexts/CursorContext';


const Feature = () => {
  const [imageIsVisible, setImageIsVisible] = useState(false);
  const { t } = useTranslation('global');
  const { setCursorType } = useCursor();

  return (
    <div className={classes.Feature}
    onMouseEnter={() => setImageIsVisible(true)}
    onMouseLeave={() => setImageIsVisible(false)}
    >
      <div className={classes.FeatureContainer}>
        <div className={classes.Title}>
          Diseño WEB
        </div>
      </div>
      {imageIsVisible && (
        <div className={classes.ImageContainer}
          onClick={() => alert('feature')}
          onMouseEnter={() => setCursorType("pointer")}
          onMouseLeave={() => setCursorType("default")}
        >
          <img src={image} />
        </div>
      )}

    </div >
  );

}

export default Feature;
