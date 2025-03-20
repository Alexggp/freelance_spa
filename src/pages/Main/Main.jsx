import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Main.module.css';
import WordRevealLoop from './WordRevealLoop/WordRevealLoop';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import sampleVideo from '../../assets/video/main_video.mp4';
import ScrollCta from './ScrollCta/ScrollCta';
import StretchedTitle from './StretchedTitle/StretchedTitle';
import Introduction from './Introduction/Introduction';
import PassionSection from './PassionSection/PassionSection';
import Inspiration from './Inspiration/Inspiration';
import Feature from '../../components/Feature/Feature';

const Main = () => {
  const { t } = useTranslation('global');

  return (
    <div className={classes.MainPage}>

      {/* <div className={classes.CoverSection}>
        <WordRevealLoop />
        <VideoPlayer src={sampleVideo} />
        <ScrollCta />
      </div>
      <StretchedTitle />
      <Introduction />
      <PassionSection />
      <Inspiration /> */}
      <Feature/>
      <Feature/>
      <Feature/>

    </div>
  );

}

export default Main;
