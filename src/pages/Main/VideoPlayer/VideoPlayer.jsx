import { useRef, useEffect } from "react";
import classes from "./VideoPlayer.module.css";
import { useCursor } from "../../../contexts/CursorContext";
import { Parallax, Background } from 'react-parallax';
import { useCursorOnHoverArea } from "../../../hooks/useCursorOnHoverArea";

/**
 * Componente que muestra un video con efecto parallax y control de cursor personalizado.
 *
 * @param {Object} props
 * @param {string} props.src - Ruta del video
 * @param {string} props.poster - Imagen de portada del video
 *
 * @example
 * <VideoPlayer src="/video.mp4" poster="/poster.jpg" />
 */
const VideoPlayer = ({ src, poster }) => {
  const videoRef = useRef(null);
  const { cursorType, setCursorType } = useCursor();

  const ref = useCursorOnHoverArea({
    enterType: () => videoRef.current?.paused ? "playVideo" : "pauseVideo",
    leaveType: "default"
  });

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.volume = 0.2;
      videoRef.current.play();
      setCursorType("pauseVideo"); // porque ahora está reproduciendo
    } else {
      videoRef.current.pause();
      setCursorType("playVideo"); // porque ahora está pausado
    }
  };


  return (
    <div ref={ref} className={classes.VideoPlayer}>
      <Parallax className={classes.ParallaxContainer} strength={200}>
        <Background className={classes.CustomBackground}>
          <div className={classes.BackgroundContainer}>
            <video
              ref={videoRef}
              className={classes.Video}
              src={src}
              poster={poster}
              loop
              onClick={togglePlayPause}
            />
          </div>
        </Background>
      </Parallax>

      <div className={classes[cursorType === "default" ? "playVideo" : cursorType]} />
    </div>
  );
};

export default VideoPlayer;
