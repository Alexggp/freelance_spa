import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { useTranslation } from 'react-i18next';
import classes from './Mountain.module.css';
import bgMountains from '../../../assets/backgrounds/bg_mountains.jpg';

const Mountain = () => {
  const { t } = useTranslation('global');
  return (
    <Parallax  className={classes.Mountain}>
      <Background className={classes.CustomBackground}>
        <img src={bgMountains} alt="mountains" />
      </Background>
      <div className={classes.Title}>{t('about.Mountain')}</div>
    </Parallax>
  );
};

export default Mountain;
