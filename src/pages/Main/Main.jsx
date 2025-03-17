import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Main.module.css';
import WordRevealLoop from './WordRevealLoop/WordRevealLoop';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import sampleVideo from '../../assets/video/main_video.mov';

const Main = () => {
  const { t } = useTranslation('global');

  return (
    <div className={classes.MainPage}>
      <WordRevealLoop />
      <VideoPlayer src={sampleVideo} />
    </div>
  );

}

export default Main;
