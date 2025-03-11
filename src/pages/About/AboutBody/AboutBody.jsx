import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


import classes from './AboutBody.module.css';
import HorizontalBody from '../HorizontalBody/HorizontalBody';
import Container from '../../../components/Container/Container';
import Logo from '../../../components/Logo/Logo';
import References from '../References/References';

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
         <div className={classes.CenterText}>
          <h1>Pasaron los años...</h1>
         </div>
        
        </Container>
      </div>
      <References/>
      <div className={classes.Footer}>
        <Logo />
      </div>
    </>
  );
};

export default AboutBody;
