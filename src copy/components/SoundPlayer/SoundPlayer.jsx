import { useEffect, useRef, useState } from "react";
import classes from "./SoundPlayer.module.css";
import soundOn from '../../assets/sound_on.svg';
import soundOff from '../../assets/sound_off.svg';

const SoundPlayer = ({ sound }) => {
  const audioRef = useRef(new Audio(sound));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.2;
    audio.loop = true;

    // Intentar reproducir automáticamente
    audio.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      console.warn("El navegador bloqueó la reproducción automática. Se requiere interacción.");
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const toggleSound = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play().then(() => setIsPlaying(true))
        .catch(err => console.error("Error al reproducir el sonido:", err));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <button className={classes.soundButton} onClick={toggleSound}>
      <img src={isPlaying ? soundOn : soundOff} alt="Sound Icon" />
    </button>
  );
};

export default SoundPlayer;
