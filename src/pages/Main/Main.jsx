import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Main.module.css';
import WordRevealLoop from './WordRevealLoop/WordRevealLoop';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import sampleVideo from '../../assets/video/spa_compressed.mp4';
import ScrollCta from './ScrollCta/ScrollCta';
import StretchedTitle from './StretchedTitle/StretchedTitle';
import Introduction from './Introduction/Introduction';
import PassionSection from './PassionSection/PassionSection';
import Inspiration from './Inspiration/Inspiration';
import FeaturesSlide from './FeaturesSlide/FeaturesSlide';
import Contact from './Contact/Contact';

const Main = () => {
  const { t } = useTranslation('global');

  return (
    <div className={classes.MainPage}>

      <div className={classes.CoverSection}>
        <WordRevealLoop />
        <VideoPlayer src={sampleVideo} />
        <ScrollCta />
      </div>
      <StretchedTitle />
      <Introduction />
      <PassionSection />
      <Inspiration />
      <FeaturesSlide />
      <Contact />
    </div>
  );

}

export default Main;
