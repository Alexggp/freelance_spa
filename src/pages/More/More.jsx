import React from 'react';
import { useTranslation } from 'react-i18next';
import { Parallax, Background } from 'react-parallax';

import useAutoScroll from '../../hooks/useAutoScroll';
import classes from './More.module.css';
import VideoBg from '../../assets/turtle_bg.mp4';
import Logo from '../../components/Logo/Logo';
import MoreBody from './MoreBody/MoreBody';


const More = () => {
  const { t } = useTranslation('global');

  useAutoScroll("targetSection", 1500, 3000);

  return (
    <div className={classes.MorePage}>

      <Parallax strength={300} blur={10} className={classes.ParallaxContainer}>
        <Background className="custom-bg">
          <div className={classes.BackgroundContainer}>
            <video autoPlay loop muted className={classes.Video}>
              <source src={VideoBg} type="video/mp4" />
            </video>
          </div>
        </Background>
      </Parallax>
      <div className={classes.Body} id={'targetSection'}>
        <Parallax
          className={classes.ParallaxLogo}
          renderLayer={percentage => (

            <div
              style={{
                transform: `scale(${percentage * 0.6 + 0.8})`,
                overflow: "visible",
                marginTop: "50px"
              }}
            >
              <Logo alternative />
            </div>
          )}
        >
         
        </Parallax>
        <MoreBody />
      </div>
    </div>
  );

}

export default More;
