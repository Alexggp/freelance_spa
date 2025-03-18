import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Main.module.css';
import WordRevealLoop from './WordRevealLoop/WordRevealLoop';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import sampleVideo from '../../assets/video/main_video.mp4';
import ScrollCta from './ScrollCta/ScrollCta';
import StretchedTitle from './StretchedTitle/StretchedTitle';

const Main = () => {
  const { t } = useTranslation('global');

  return (
    <div className={classes.MainPage}>
      <div className={classes.CoverSection}>
        <WordRevealLoop />
        <VideoPlayer src={sampleVideo} />
        <ScrollCta />
        <StretchedTitle />
      </div>
    </div>
  );

}

export default Main;
