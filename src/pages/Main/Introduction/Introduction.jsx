import React from 'react';
import classes from './Introduction.module.css';
import { useTranslation } from 'react-i18next';
import TextCta from '../../../components/TextCta/TextCta';

const Introduction = () => {
  const { t } = useTranslation('global');
  return (
    <div className={classes.Introduction}>
      <p className={classes.Title}>{t('main.Introduction.title')}</p>
      <p className={classes.Text}>
        {t('main.Introduction.text')} 
        <TextCta text={t('main.Introduction.cta')} url="/about" />
      </p>
    </div>
  );
}

export default Introduction;
