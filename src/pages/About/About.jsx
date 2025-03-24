import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './About.module.css';
import Cover from './Cover/Cover';

const About = () => {
  const { t } = useTranslation('global');

  return (
    <div className={classes.AboutPage}>
      <Cover />
    </div>
  );
}

export default About;
