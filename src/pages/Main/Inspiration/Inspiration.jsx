import React from 'react';
import classes from './Inspiration.module.css';
import { useTranslation } from 'react-i18next';
import { Parallax, Background } from 'react-parallax';

import Image1 from '../../../assets/backgrounds/inspiration1.jpg';
import Image2 from '../../../assets/backgrounds/inspiration2.jpg';
import ImageDiscover from '../../../components/ImageDiscover/ImageDiscover';
import { useCursor } from '../../../contexts/CursorContext';

const Inspiration = () => {

  const { t } = useTranslation('global');
  const { setCursorType } = useCursor();

  return (
    <div className={classes.Inspiration}>
      <Parallax className={classes.ParallaxContainer} strength={200}>
        <Background className={classes.CustomBackground}>
          <div className={classes.ImagesContainer}
            onMouseEnter={() => setCursorType("none")}
            onMouseLeave={() => setCursorType("default")}
          >
            <h1 className={classes.Title}>{t('main.Inspiration.title')}</h1>
            <ImageDiscover baseImage={Image1} overlayImage={Image2} />
          </div>
        </Background>
      </Parallax>
      <div className={classes.Subtitle}><p>{t('main.Inspiration.subtitle')}</p></div>

    </div >
  );

}

export default Inspiration;
