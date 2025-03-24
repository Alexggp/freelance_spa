import React from 'react';
import classes from './Introduction.module.css';
import { useTranslation } from 'react-i18next';

const Introduction = () => {
  const { t } = useTranslation('global');
  return (
    <div className={classes.Introduction}>
      <h1 className={classes.Title}>{t('about.Introduction.title')}</h1>
      <p className={classes.Text}>{t('about.Introduction.text')}</p>
      
    </div>
  );

}

export default Introduction;
