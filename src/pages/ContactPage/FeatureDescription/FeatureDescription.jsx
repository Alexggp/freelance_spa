import React from 'react';
import classes from './FeatureDescription.module.css';
import Button from '../../Main/Contact/Button/Button';

const FeatureDescription = ({ feature }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.ImageSection}>
        <img src={`/src/assets/features/${feature.image}`} alt={feature.title} />
      </div>
      <div className={classes.TextSection}>
        <p>{feature.description}</p>
        <h1>{feature.cta}</h1>
        <Button />
      </div>
    </div>
  );
};

export default FeatureDescription;
