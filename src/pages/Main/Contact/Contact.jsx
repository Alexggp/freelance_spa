import React from 'react';
import classes from './Contact.module.css';
import { useTranslation } from 'react-i18next';
import Button from './Button/Button';

const Contact = () => {
  const { t } = useTranslation('global');
  return (
    <div className={classes.Contact}>
      <p className={classes.Text}>{t('main.Contact.text')}</p>
      <h1 className={classes.Title}>{t('main.Contact.title')}</h1>
      <Button />
    </div>
  );

}

export default Contact;
