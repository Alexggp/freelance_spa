import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './MainBody.module.css';
import Container from '../../../components/Container/Container';
import FaroImg from '../../../assets/faro-azul.png'
import Button from '../../../components/Button/Button';
import Logo from '../../../components/Logo/Logo';



const MainBody = () => {
  const { t } = useTranslation('global');
  return (
    <div className={classes.MainBody}>

      <Container className={classes.BodyContainer} size={'lg'}>
        <div className={classes.MainText}>
          <p>Tienes que tener una cosa bien clara.</p>
          <p>Una <span>empresa</span> sin una buena identidad digital es un barco a la deriva, en la noche, con las <span>luces apagadas</span>.</p>
          <p>Nadie te ve, nadie sale en tu busca y lo peor...</p>
          <p>Te vas <span>a pique</span>.</p>
          <p>Tranquilo, no dejes que eso te hunda.</p>
          <p>Internet nos abre un océano infinito<br />de <span>oportunidades</span>.</p>
          <p>Lleno de posibilidades, lleno de <span>tesoros</span>.</p>
          <p>Pero hay demasiados peces en el mar...</p>
          <p>¿Qué <span>tecnología</span> escoger? ¿Qué <span>proveedor</span> contratar?</p>
          <img className={classes.Image} src={FaroImg}/>
        </div>
        <div className={classes.CtaText}>
          <p>No te dejes seducir por sirenas que te llevan contra las rocas.</p>
          <h3><span>Pisa en tierra firme</span></h3>
          <Button className={classes.Button}>Contáctanos</Button>
        </div>
      </Container>
      <div className={classes.Footer}>
          <Logo />
          <div className={classes.enlaceSubrayado}>Quiero profundizar</div>
        </div>
    </div>
  );

}

export default MainBody;
