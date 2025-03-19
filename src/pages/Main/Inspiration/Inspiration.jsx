import React from 'react';
import classes from './Inspiration.module.css';
import { useTranslation } from 'react-i18next';

import Image1 from '../../../assets/backgrounds/inspiration1.jpg';
import Image2 from '../../../assets/backgrounds/inspiration2.jpg';
import ImageDiscover from '../../../components/ImageDiscover/ImageDiscover';


const Inspiration = () => {
  const { t } = useTranslation('global');
  return (
    <div className={classes.Inspiration}>
      <div className={classes.ImagesContainer}>
      <ImageDiscover baseImage={Image1} overlayImage={Image2} />
      </div>
      <p className={classes.Title}>{t('main.Inspiration.title')}</p>
      <p className={classes.Title}>{t('main.Inspiration.subtitle')}</p>

    </div>
  );

}

export default Inspiration;
