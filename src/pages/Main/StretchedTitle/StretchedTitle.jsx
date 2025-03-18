import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './StretchedTitle.module.css';

const StretchedTitle = () => {
  const { t } = useTranslation('global');

  return (
    <div className={classes.StretchedTitle}>
      <span className={classes.Stretchable}>{t('main.StretchedTitle')}</span>
    </div>
  );

}

export default StretchedTitle;
