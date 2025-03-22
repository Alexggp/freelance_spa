import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import classes from './AboutCta.module.css';
import { useCursor } from '../../../../contexts/CursorContext';
import ctaImage from '../../../../assets/icons/svg/enter.svg';
const AboutCta = () => {
  const { t } = useTranslation('global');
    const { setCursorType } = useCursor();
    const navigate = useNavigate();

    const navigateTo = () => {
      navigate('/about');
    };
  return (
    <button className={classes.AboutCta}
    onClick={navigateTo}
    onMouseEnter={() => setCursorType("pointer")}
    onMouseLeave={() => setCursorType("default")}
  >
    <div className={classes.Container}>
      <div className={classes.Title}>{t('main.Introduction.cta')}</div>
      <div className={classes.IconContainer}>
        <img src={ctaImage} alt={t('main.Introduction.cta')}/>
      </div>
    </div>

    </button>
  );

}

export default AboutCta;
