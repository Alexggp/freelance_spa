import React from 'react';
import classes from './Main.module.css';
import VideoBg from '../../assets/video_background.mp4';
import Logo from '../../components/Logo/Logo';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';




const Main = () => {

  return (
    <>
    <div className={classes.BackgroundContainer}>
      <video autoPlay loop muted className={classes.Video}>
        <source src={VideoBg} type="video/mp4" />
      </video>
      <Container className={classes.Cover} padding={'40px'}>
        <Logo/>
        <div className={classes.Title}>
        <h2>El oceano digital es infinito</h2>
        <h1>Lleva tu proyecto a buen puerto</h1>
        </div>
        <Button className={classes.Button}>Llámanos</Button>
      </Container>
    </div>
    </>
  );

}

export default Main;
