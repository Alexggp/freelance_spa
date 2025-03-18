import { useRef } from "react";
import classes from "./VideoPlayer.module.css";
import { useCursor } from "../../../contexts/CursorContext";
import { Parallax, Background } from 'react-parallax';


const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const { cursorType, setCursorType } = useCursor();



  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.volume = 0.2;
      videoRef.current.play();
      setCursorType("pauseVideo")
    } else {
      videoRef.current.pause();
      setCursorType("playVideo")
    }
  };

  return (
    <div className={classes.VideoPlayer} >
      <Parallax className={classes.ParallaxContainer} strength={200}>
        <Background className={classes.CustomBackground}>
          <div className={classes.BackgroundContainer}>
            <video
              ref={videoRef}
              className={classes.Video}
              src={src}
              loop
              onClick={togglePlayPause}
              onMouseEnter={() => setCursorType(videoRef.current.paused ? "playVideo" : "pauseVideo")}
              onMouseLeave={() => setCursorType("default")}
            />
          </div>
        </Background>
      </Parallax>
      <div className={classes[cursorType === "default" ? "playVideo" : cursorType]} />

    </div>

  );
};

export default VideoPlayer;
