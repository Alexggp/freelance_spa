import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FeatureDescription from './FeatureDescription/FeatureDescription'; 
import Contact from '../Main/Contact/Contact';

const ContactPage = () => {
  const { t } = useTranslation('features');
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const feature = params.get('feature');
  const features = t('features', { returnObjects: true });
  const featureObj = feature && features[feature];

  return (
    <div className="ContactPage">
      {featureObj ? <FeatureDescription feature={featureObj} /> : <Contact />}
    </div>
  );
};

export default ContactPage;
