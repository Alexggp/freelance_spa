import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Main.module.css';
import VideoBg from '../../assets/video_background.mp4';
import waveSound from '../../assets/sounds/sea-waves.mp3';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';
import MainBody from './MainBody/MainBody';
import SoundPlayer from '../../components/SoundPlayer/SoundPlayer';


const Main = () => {
  const { t } = useTranslation('global');
  return (
    <div className={classes.MainPage}>
      <SoundPlayer sound={waveSound}/>
      <div className={classes.BackgroundContainer}>
        <video autoPlay loop muted className={classes.Video}>
          <source src={VideoBg} type="video/mp4" />
        </video>
        <div className={classes.Cover}>
          <div className={classes.LogoContainer}> 
            <Logo />
          </div>
          
          <div className={classes.Title}>
            <h2>{t('main.cover.subtitle')}</h2>
            <h1>{t('main.cover.title')}</h1>
            <Button className={classes.Button}>{t('main.cover.button')}</Button>
          </div>
          
        </div>

      </div>

      <div className={classes.Body}>
      <MainBody />
      </div>
      <div className={classes.Bottom}></div>
    </div>
  );

}

export default Main;
