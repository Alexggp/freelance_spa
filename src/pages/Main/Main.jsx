import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Main.module.css';
import WordRevealLoop from './WordRevealLoop/WordRevealLoop';

const Main = () => {
  const { t } = useTranslation('global');

  return (
    <div className={classes.MainPage}>
      <WordRevealLoop />
    </div>
  );

}

export default Main;
