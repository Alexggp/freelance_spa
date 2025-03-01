import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Main.module.css';
import VideoBg from '../../assets/video_background.mp4';
import Logo from '../../components/Logo/Logo';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';




const Main = () => {
  const { t } = useTranslation('global');
  return (
    <div className={classes.MainPage}>

      <div className={classes.BackgroundContainer}>
        <video autoPlay loop muted className={classes.Video}>
          <source src={VideoBg} type="video/mp4" />
        </video>
        <div className={classes.Cover}>
          <Logo />
          <div className={classes.Title}>
            <h2>{t('main.cover.subtitle')}</h2>
            <h1>{t('main.cover.title')}</h1>
          </div>
          <Button className={classes.Button}>{t('main.cover.button')}</Button>
        </div>

      </div>

      <div className={classes.Body}>
       <Container className={classes.BodyContainer} size={'lg'} backgroundColor='#FAFAFA'>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
       </Container>
      </div>
      <div className={classes.Bottom}></div>
    </div>
  );

}

export default Main;
