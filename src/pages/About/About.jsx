import React from 'react';
import classes from './About.module.css';
import Cover from './Cover/Cover';
import ScrollCta from '../Main/ScrollCta/ScrollCta';
import Introduction from './Introduction/Introduction';
import Contact from '../Main/Contact/Contact';
import Mountain from './Mountain/Mountain';
import Projects from './Projects/Projects';

const About = () => {

  return (
    <div className={classes.AboutPage}>
      {/* <Cover />
      <ScrollCta/>
      <Mountain />
      <Introduction /> */}
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}

export default About;
