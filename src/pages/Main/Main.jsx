import React from 'react';
import classes from './Main.module.css';
import VideoBg from '../../assets/video_background.mp4';

const Main = () => {

  return (
    <>
    <div className={classes.BackgroundContainer}>
      <video autoPlay loop muted className={classes.Video}>
        <source src={VideoBg} type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>
    </div>
    </>
  );

}

export default Main;
