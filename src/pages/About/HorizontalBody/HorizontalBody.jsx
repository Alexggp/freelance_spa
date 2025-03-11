import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import classes from './HorizontalBody.module.css';
import img1 from '../../../assets/about_images/hs_1.jpg';
import img2 from '../../../assets/about_images/hs_2.jpg';
import img3 from '../../../assets/about_images/hs_3.jpg';
import img4 from '../../../assets/about_images/hs_4.jpg';
import img5 from '../../../assets/about_images/hs_5.jpg';


const HorizontalBody = () => {
  const { t } = useTranslation('global');
  const sliderRef = useRef(null)
  const containerRef = useRef(null)
  const tl = gsap.timeline();

  const addAnim = () => {
    const slider = sliderRef.current;
    const container = containerRef.current;
    const totalScroll = container.scrollWidth - container.offsetWidth;
    console.log(totalScroll)

    tl.add(gsap.to(slider, {
      x: () => -totalScroll,
      ease: 'none',
      scrollTrigger: {
        id: 'HorizontalSlide',
        trigger: container,
        pin: true,
        scrub: 1,
        markers: true,
        start: 'top top',
        end: () => "+=" + totalScroll

      }
    }))
    ScrollTrigger.refresh();
  }

  const removeAnim = () => {
    tl.kill(true);
  }

  useEffect(() => {
    addAnim();
    return removeAnim;
  }, [])

  return (

    <div className={classes.HorizontalBody}>
      <div ref={containerRef} className={classes.HorizontalContainer}>
        <div ref={sliderRef} className={classes.HorizontalSlider}>
          <div className={classes.SecctionContainer}>
            <div className={classes.ImgContainer}>
              <img src={img1} />
            </div>
            <div className={classes.TextContainer}>
              <p>
                Siempre se me dió bien <span>arreglar cosas</span>.
              </p>
              <p>
                Cuando se me rompía cualquier aparatito <span>lo destripaba</span>. Muchas veces se iba a la basura peor que antes, pero otras, <span>lo ponía a funcionar</span> y me consideraba un genio.
              </p>
              <p>
                Así que <span>entré en Teleco</span>.
              </p>
            </div>
          </div>
          <div className={classes.SecctionContainer}>
            <div className={classes.ImgContainer}>
              <img src={img2} />
            </div>
            <div className={classes.TextContainer}>
              <p>
                <span>¿Y adivinas qué?</span>
              </p>
              <p>Sólo hacíamos integrales y ecuaciones diferenciales. <span>Un coñazo</span>.
              </p>
              <p>
                ¡Sorpresa!
              </p>
              <p>
                Sinceramente, <span>odiaba aquella carrera</span>.

              </p>

            </div>
          </div>
          <div className={classes.SecctionContainer}>
            <div className={classes.ImgContainer}>
              <img src={img3} />
            </div>
            <div className={classes.TextContainer}>
              <p>
                Hasta que en segundo aprendí <span>JavaScript</span>. 
                </p><p> 
                Me quedé perplejo.
              </p>

              <p>
                Escribía <span>código</span> en un documento y mágicamente <span>aparecía en la web</span>.
              </p>

            </div>
          </div>
          <div className={classes.SecctionContainer}>
            <div className={classes.ImgContainer}>
              <img src={img4} />
            </div>
            <div className={classes.TextContainer}>
            <p> Aquello no eran abstracciones matemáticas
              </p>
              <p>
                <span>Lo podías ver</span>, estaba allí.
              </p>
              <p>
                Por fín algo que le podía <span>mostrar a mi madre</span>. 
              </p>
              <p>
                Algo tangible, algo <span>fantástico</span>.
              </p>
            </div>
          </div>
          <div className={classes.SecctionContainer}>
            <div className={classes.ImgContainer}>
              <img src={img5} />
            </div>
            <div className={classes.TextContainer}>
              <p><span>Me enamoré de aquello</span>.</p>
              <p>El resto de asignaturas las aprobaba a duras penas, pero en las de <span>programar</span>, solo <span>sobresalientes</span>. </p>
            </div>
          </div>
        </div>
      </div>
    </div >

  );
};

export default HorizontalBody;
