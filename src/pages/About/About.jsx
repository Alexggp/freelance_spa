import React from 'react';

import classes from './About.module.css';
import AboutBody from './AboutBody/AboutBody';
import AboutIntro from './AboutIntro/AboutIntro';
import hopeSound from '../../assets/sounds/hope.mp3';
import SoundPlayer from '../../components/SoundPlayer/SoundPlayer';

const About = () => {

  return (
    <div className={classes.About}>
      <SoundPlayer sound={hopeSound}/>
     <AboutIntro/>
     <div className={classes.Body}><AboutBody/></div>
    </div>
  );
}

export default About;
