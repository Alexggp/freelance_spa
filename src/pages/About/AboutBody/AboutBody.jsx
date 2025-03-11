import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import classes from './AboutBody.module.css';
import HorizontalBody from '../HorizontalBody/HorizontalBody';
import Container from '../../../components/Container/Container';
import Logo from '../../../components/Logo/Logo';
import Button from '../../../components/Button/Button';
import References from '../References/References';

const AboutBody = () => {
  const { t } = useTranslation('global');
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate('/');
  };

  return (
    <>
      <div className={classes.AboutBody}>
        <Container className={classes.BodyContainer} size={'lg'}>
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
        <HorizontalBody />
        <Container className={classes.BodyContainer} size={'lg'}>
          <div className={classes.CenterText}>
            <h1>Pasaron los años...</h1>
          </div>

        </Container>
      </div>
      <References />
      <div className={classes.AboutBody}>
        <Container className={classes.BodyContainer} size={'lg'}>
          <div className={classes.CenterText}>
            <p>Quería crear.</p>
            <p>
              Crear <span>algo nuevo</span>, algo que fuese <span>realmente mío</span>.
            </p>
            <p>
              Y <span>ayudar</span> a gente que hubiese creado algo que fuese <span>realmente suyo</span>.
            </p>
            <p>
              Ahí es donde está <span>el mimo</span>.
            </p>
            <p>
              Ahí es donde <span>realmente vale la pena</span> romperse los cuernos.
            </p>
          </div>
          <div className={classes.CtaText}>
            <p>
              Si quieres que te ayude a <span>crear lo tuyo</span>, o hacerlo crecer
            </p>
            <h3>Agenda una llamada</h3>
            <Button className={classes.Button}>Agendar</Button>
          </div>
        </Container>


      </div>
      <div className={classes.Footer}>
        <Logo />
        <div onClick={navigateTo} className={classes.enlaceSubrayado}>
          Volver al inicio
        </div>
      </div>
    </>
  );
};

export default AboutBody;
