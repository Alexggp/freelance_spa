import { useRef } from "react";
import classes from "./VideoPlayer.module.css";

/**
 * VideoPlayer Component
 *
 * @description Renders a full-width (100vw) and partial-height (40vh) video player.
 * The video is set to loop, and clicking on it toggles play/pause.
 */
const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className={classes.videoContainer}>
      <video
        ref={videoRef}
        className={classes.video}
        src={src}
        loop
        onClick={togglePlayPause}
      />
    </div>
  );
};

export default VideoPlayer;
