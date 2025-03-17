import { useRef } from "react";
import classes from "./VideoPlayer.module.css";
import { useCursor } from "../../../contexts/CursorContext";


const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const { setCursorType } = useCursor();
  
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
        onMouseEnter={() => setCursorType("special")}
        onMouseLeave={() => setCursorType("default")}
      />
    </div>
  );
};

export default VideoPlayer;
