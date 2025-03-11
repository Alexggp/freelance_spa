import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Parallax } from 'react-parallax';

import classes from './AboutBody.module.css';
import HorizontalBody from '../HorizontalBody/HorizontalBody';
import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';
import Logo from '../../../components/Logo/Logo';
import stepsBg from '../../../assets/steps_bg.jpg';

const AboutBody = () => {
  const { t } = useTranslation('global');
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate('/about');
  };

  return (
    <>
      <div className={classes.AboutBody}>
        <Container className={classes.BodyContainer}  size={'lg'}>
         <div className={classes.CenterText}>
         <p>
            Si has llegado hasta aquí ya somos prácticamente amigos.
         </p>
         <p>
            Así que voy a ser sincero contigo.
         </p>
         <p>
            Me metí en <span>Teleco</span> porque quería aprender a piratear el Canal+. 
         </p>
         <p>
            Ya sabes, ilusiones de adolescente...
          </p>
         </div>
         </Container>
         <HorizontalBody/>
         <Container className={classes.BodyContainer}  size={'lg'}>
         <div className={classes.Studies}>
          <div className={classes.ImageContainer}>

          </div>
          <div className={classes.FeedBackContainer}>
          <p>
            Ya sabes, ilusiones de adolescente. Siempre se me dió bien arreglar cosas, y cuando se me rompía cualquier aparatito en vez de tirarlo, lo destripaba. Muchas veces se iba a la basura peor de como estaba antes, pero otras, lo ponía a funcionar y me consideraba un genio. 
          </p>
          <p>
            Así que entré en Teleco. 
          </p>

         </div>
         </div>
        
        </Container>
      </div>
      <div className={classes.Footer}>
        <Logo alternative/>
      </div>
    </>
  );
};

export default AboutBody;
