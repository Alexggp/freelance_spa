import React from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './TextCta.module.css';
import { useCursor } from '../../contexts/CursorContext';
import ctaImage from '../../assets/icons/svg/enter.svg';

const TextCta = ({text, url}) => {
  const { setCursorType } = useCursor();
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(url);
  };

  return (
    <button
      className={classes.TextCta}
      onClick={navigateTo}
      onMouseEnter={() => setCursorType("pointer")}
      onMouseLeave={() => setCursorType("default")}
      aria-label={text}
    >
      <div className={classes.Container}>
        <div className={classes.Title}>{text}</div>
        <div className={classes.IconContainer}>
          <img src={ctaImage} alt={text} />
        </div>
      </div>
    </button>
  );
}

export default TextCta;
