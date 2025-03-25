import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './FeaturesSlide.module.css';
import { useTranslation } from 'react-i18next';
import Feature from '../../../components/Feature/Feature';
import HorizontalBody from '../../../components/HorizontalBody/HorizontalBody';

const FeaturesSlide = () => {
  const { t } = useTranslation('features');
  const navigate = useNavigate();

  const features = t('features', { returnObjects: true });

  const handleSelected = (x) => {
    navigate(`/contact?feature=${x}`);
  };

  const featuresComponents = Object.keys(features).map(key => (
    <Feature
      key={key}
      title={features[key].title}
      image={`/src/assets/features/${features[key].image}`}
      selected={() => handleSelected(key)}
    />
  ));

  return (
    <div className={classes.FeaturesSlide}>
      <HorizontalBody>
        {featuresComponents}
      </HorizontalBody>
    </div>
  );
};

export default FeaturesSlide;
