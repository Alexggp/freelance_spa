import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Logo.module.css';

const Logo = () => {
  const { t } = useTranslation('global');

  return (
    <div className={classes.Logo}>
      A.
    </div>
  );

}

export default Logo;