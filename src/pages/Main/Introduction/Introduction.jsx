import React from 'react';
import classes from './Introduction.module.css';
import { useTranslation } from 'react-i18next';
import AboutCta from './AboutCta/AboutCta';

const Introduction = () => {
  const { t } = useTranslation('global');
  return (
    <div className={classes.Introduction}>
      <p className={classes.Title}>{t('main.Introduction.title')}</p>
      <p className={classes.Text}>{t('main.Introduction.text')} <AboutCta /></p>
      
    </div>
  );

}

export default Introduction;
