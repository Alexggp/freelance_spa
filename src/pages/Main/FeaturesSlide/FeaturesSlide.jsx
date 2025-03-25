import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './FeaturesSlide.module.css';
import { useTranslation } from 'react-i18next';
import Feature from '../../../components/Feature/Feature';
import HorizontalBody from '../../../components/HorizontalBody/HorizontalBody';

/**
 * Renders a horizontal scroll of features with title and image.
 * Translations and image paths are resolved dynamically.
 *
 * @example
 * // Navigation to /contact?feature=featureKey on click
 * <FeaturesSlide />
 */
const FeaturesSlide = () => {
  const { t } = useTranslation('features');
  const navigate = useNavigate();

  const features = t('features', { returnObjects: true });

  // Import all images in /src/assets/features/* eagerly
  const images = import.meta.glob('/src/assets/features/*', {
    eager: true,
    import: 'default'
  });

  const handleSelected = (key) => {
    navigate(`/contact?feature=${key}`);
  };

  const featuresComponents = Object.keys(features).map((key) => {
    const { title, image } = features[key];
    const imagePath = images[`/src/assets/features/${image}`];

    return (
      <Feature
        key={key}
        title={title}
        image={imagePath}
        selected={() => handleSelected(key)}
      />
    );
  });

  return (
    <div className={classes.FeaturesSlide}>
      <HorizontalBody>
        {featuresComponents}
      </HorizontalBody>
    </div>
  );
};

export default FeaturesSlide;
