import React from "react";
import { useTranslation } from 'react-i18next';

import classes from './References.module.css';
import LogoBar from "./LogoBar/LogoBar";

import officeImage from '../../../assets/about_images/office.jpg';

const References = () => {
  const { t } = useTranslation('global');

  return (
    <div>
      <div className={classes.ReferencesContainer} id="References">
        <div className={classes.ImgContainer}>
          <img src={officeImage} alt="Office" />
        </div>
        <div className={classes.TextContainer}>
          {t('references.paragraphs', { returnObjects: true }).map((text, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
          ))}
        </div>
      </div>
      <LogoBar />
    </div>
  );
}

export default References;
