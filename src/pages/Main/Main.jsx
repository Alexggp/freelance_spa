import React, { useState, useEffect } from 'react';

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
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoLoaded) {
      ScrollTrigger.refresh();
    }
  }, [videoLoaded]);

  return (
    <div className={classes.MainPage}>
      <div className={classes.CoverSection}>
        <WordRevealLoop />

        <div
          className={videoLoaded ? classes.VideoBlockFadeIn : classes.HiddenBlock}
        >
          <VideoPlayer
            src={sampleVideo}
            poster={videoPoster}
            onLoadedData={() => setVideoLoaded(true)}
          />
          <ScrollCta />
        </div>
      </div>

      {videoLoaded && (
        <>
          <StretchedTitle />
          <Introduction />
          <PassionSection />
          <Inspiration />
          <FeaturesSlide />
          <ProjectsCta />
          <Contact />
        </>
      )}
    </div>
  );
};

export default Main;
