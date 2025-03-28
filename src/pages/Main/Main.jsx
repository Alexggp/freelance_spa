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
import useIsIos from '../../hooks/useIsIos';
import usePageReady from '../../hooks/usePageReady';

const Main = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const isIOS = useIsIos();
  const pageReady = usePageReady();

  useEffect(() => {
    if (isIOS) {
      setVideoLoaded(true);
    }
  }, [isIOS]);

  useEffect(() => {
    if (videoLoaded || pageReady) {
      ScrollTrigger.refresh();
    }
  }, [videoLoaded, pageReady]);

  return (
    <div className={classes.MainPage}>
      <div className={classes.CoverSection}>
        <WordRevealLoop />

        {isIOS && pageReady ? (
          <>
            <div className={classes.PosterImageContainer}>
            <img
              src={videoPoster}
              alt="Poster"
              className={classes.PosterImage}
            />
            </div>

            <ScrollCta />
          </>
        ) : (
          <div
            className={`${classes.VideoBlockFadeIn} ${
              videoLoaded && pageReady ? classes.Visible : classes.Hidden
            }`}
          >
            <VideoPlayer
              src={sampleVideo}
              poster={videoPoster}
              onLoadedData={() => setVideoLoaded(true)}
            />
            <ScrollCta />
          </div>
        )}
      </div>

      {videoLoaded && pageReady && (
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
