import React from 'react';
import classes from './PassionSection.module.css';
import { useTranslation } from 'react-i18next';
import PhotoShooter from '../../../components/PhotoShooter/PhotoShooter';
import useScreenSize from '../../../hooks/useScreenSize';
import { useCursor } from '../../../contexts/CursorContext';

const PassionSection = () => {
  const { t } = useTranslation('global');
  const {isDesktop} = useScreenSize();
  const { setCursorType } = useCursor();


  return (
    <>
      <div 
      className={classes.PassionSection}
      onMouseEnter={() => setCursorType("heart")}
      onMouseLeave={() => setCursorType("default")}
      >
      <PhotoShooter fixed={!isDesktop}/>
      <p className={classes.Smile}>{t('main.PassionSection.smile')}</p>
      <div className={classes.Question}>
        <span>{t('main.PassionSection.question1').toUpperCase()}</span><br/>
        <span>{t('main.PassionSection.question2').toUpperCase()}</span>
      </div>
      
    </div>
    <div className={classes.DarkSection}>
    <p>{t('main.PassionSection.dark1')}</p>
    <p>{t('main.PassionSection.dark2')}</p>
    </div>
    </>

  );

}

export default PassionSection;
