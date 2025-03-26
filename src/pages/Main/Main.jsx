import React from 'react';

import classes from './Main.module.css';
import WordRevealLoop from './WordRevealLoop/WordRevealLoop';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import sampleVideo from '../../assets/video/spa_compressed.mp4';
import videoPoster from '../../assets/video/video_poster.jpg';
import ScrollCta from './ScrollCta/ScrollCta';
import StretchedTitle from './StretchedTitle/StretchedTitle';
import Introduction from './Introduction/Introduction';
import PassionSection from './PassionSection/PassionSection';
import Inspiration from './Inspiration/Inspiration';
import FeaturesSlide from './FeaturesSlide/FeaturesSlide';
import Contact from './Contact/Contact';
import ProjectsCta from './ProjectsCta/ProjectsCta';

const Main = () => {

  return (
    <div className={classes.MainPage}>
      <div className={classes.CoverSection}>
        <WordRevealLoop />
        <VideoPlayer src={sampleVideo} poster={videoPoster}/>
        <ScrollCta />
      </div>
      <StretchedTitle />
      <Introduction />
      <PassionSection />
      <Inspiration />
      <FeaturesSlide />
      <ProjectsCta />
      <Contact />
    </div>
  );

}

export default Main;
