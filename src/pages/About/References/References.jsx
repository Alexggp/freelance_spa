import React from "react";
import { useTranslation } from 'react-i18next';

import classes from './References.module.css';


import officeImage from '../../../assets/about_images/office.jpg';


const References = () => {
  const { t } = useTranslation('global');

  return (
    <div >
      <div className={classes.ReferencesContainer} id="References">
        <div className={classes.ImgContainer}>
          <img src={officeImage} />
        </div>
        <div className={classes.TextContainer}>
          <p>
            Pasé por varias <span>Startups</span>, como desarrollador, obviamente, y <span>acabé en una gran consultora</span>.
          </p>
          <p>
            Y entonces, <span>volví a arreglar cosas</span>, como cuando era pequeño.
          </p>
          <p>
          Ahí donde había un código que no funcionaba ni para atrás, donde los clientes estaban descontentos, ahí donde se acercaba la fecha límite y no llegaban. Ahí <span>me mandaban a mí</span>.
          </p>
          <p>
          Te lo juro, era como <span>el Séptimo de Caballería</span>. Las brigadas especiales que salvan a los rehenes al final de la peli. 
          </p>
          <p>Y al final <span>me quemé.</span></p>
          <p>
            Estaba harto de hacer malabares para salvar los trastos a los directivos del Ibex. Y que ellos no supieran ni quién era yo, ni yo saber quienes son ellos.  
          </p>
          <p>
            Estaba harto de <span>arreglar el desastre de otros</span>. Quería crear.  
          </p>
        </div>
      </div>
    </div>
  );
}

export default References;