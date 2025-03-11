import React from 'react';

import classes from './About.module.css';
import AboutBody from './AboutBody/AboutBody';
import AboutIntro from './AboutIntro/AboutIntro';

const About = () => {

  return (
    <div className={classes.About}>
     <AboutIntro/>
     <div className={classes.Body}><AboutBody/></div>
    </div>
  );
}

export default About;
