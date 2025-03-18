import React from 'react';
import classes from './PasionSection.module.css';
import { useTranslation } from 'react-i18next';
import PhotoShooter from '../../../components/PhotoShooter/PhotoShooter';

const PasionSection = () => {
  const { t } = useTranslation('global');
  return (
    <>
      <div className={classes.PasionSection}>
      <PhotoShooter />
      <p className={classes.Smile}>{t('main.PasionSection.smile')}</p>
      <div className={classes.Question}>
        <span>{t('main.PasionSection.question1').toUpperCase()}</span><br/>
        <span>{t('main.PasionSection.question2').toUpperCase()}</span>
      </div>
      
    </div>
    <div className={classes.DarkSection}></div>
    </>

  );

}

export default PasionSection;
