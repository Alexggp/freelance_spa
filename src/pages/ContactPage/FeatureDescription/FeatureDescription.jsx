import React from 'react';
import classes from './FeatureDescription.module.css';
import Button from '../../Main/Contact/Button/Button';

/**
 * Renders a full feature description with image, description and CTA.
 * Loads image dynamically to ensure compatibility in production builds.
 *
 * @param {Object} feature - Feature object containing title, image, description, and CTA.
 * @example
 * <FeatureDescription feature={{ title: 'X', image: 'x.png', description: '...', cta: 'Call to action' }} />
 */
const FeatureDescription = ({ feature }) => {
  // Import all feature images eagerly
  const images = import.meta.glob('/src/assets/features/*', {
    eager: true,
    import: 'default'
  });

  const imageSrc = images[`/src/assets/features/${feature.image}`];

  return (
    <div className={classes.Container}>
      <div className={classes.ImageSection}>
        <img src={imageSrc} alt={feature.title} />
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
