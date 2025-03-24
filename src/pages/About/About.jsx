import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './About.module.css';
import Cover from './Cover/Cover';
import ScrollCta from '../Main/ScrollCta/ScrollCta';
import Introduction from './Introduction/Introduction';
import Contact from '../Main/Contact/Contact';
import Mountain from './Mountain/Mountain';

const About = () => {
  const { t } = useTranslation('global');

  return (
    <div className={classes.AboutPage}>
      <Cover />
      <ScrollCta/>
      <Mountain />
      <Introduction />
      <Contact />
    </div>
  );
}

export default About;
