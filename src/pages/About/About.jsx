import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './About.module.css';
import Cover from './Cover/Cover';
import ScrollCta from '../Main/ScrollCta/ScrollCta';
import Introduction from './Introduction/Introduction';
import Contact from '../Main/Contact/Contact';

const About = () => {
  const { t } = useTranslation('global');

  return (
    <div className={classes.AboutPage}>
      <Cover />
      <ScrollCta/>
      <Introduction />
      <Contact />
    </div>
  );
}

export default About;
