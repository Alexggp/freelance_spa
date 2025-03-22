import React from 'react';
import classes from './FeaturesSlide.module.css';
import { useTranslation } from 'react-i18next';
import Feature from '../../../components/Feature/Feature';

import marketing from '../../../assets/features/marketing.jpg';
import design from '../../../assets/features/design.jpg';
import development from '../../../assets/features/development.jpg';
import a11y from '../../../assets/features/a11y.jpg';
import ai from '../../../assets/features/ai.jpg';
import responsive from '../../../assets/features/responsive.jpg'
import HorizontalBody from '../../../components/HorizontalBody/HorizontalBody';


const FeaturesSlide = () => {

  const { t } = useTranslation('global');

  const features = [
    {
      title: t('main.Features.marketing.title'),
      image: marketing
    },
    {
      title: t('main.Features.design.title'),
      image: design
    },
    {
      title: t('main.Features.development.title'),
      image: development
    },
    {
      title: t('main.Features.a11y.title'),
      image: a11y
    },
    {
      title: t('main.Features.responsive.title'),
      image: responsive
    },
    {
      title: t('main.Features.ai.title'),
      image: ai
    },
  ]

  const handleSelected = (x)=>{
    alert(x)
  }

  const featuresComponents = features.map(f => <Feature key={f.title} title={f.title} image={f.image} selected={() => handleSelected(f.title)} />)

  return (

    <div className={classes.FeaturesSlide}>
      <HorizontalBody>
      {featuresComponents}
      </HorizontalBody>

    </div >
  );

}

export default FeaturesSlide;
