import React from 'react';
import classes from './Introduction.module.css';
import { useTranslation } from 'react-i18next';
import TextCta from '../../../components/TextCta/TextCta';
const Introduction = () => {
  const { t } = useTranslation('global');
  return (
    <div className={classes.Introduction}>
      <p className={classes.Title}>{t('about.Introduction.title')}</p>
      <p className={classes.Text}>{t('about.Introduction.text1')}</p>
      <p className={classes.Text}>{t('about.Introduction.text2')}</p>
      <p className={classes.Text}>{t('about.Introduction.text3')} 
        <TextCta text={t('about.Introduction.cta')} url="/contact" />
      </p>
    </div>
  );
}

export default Introduction;
