import React from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './TextCta.module.css';
import ctaImage from '../../assets/icons/svg/enter.svg';
import { useCursorOnHoverArea } from '../../hooks/useCursorOnHoverArea';


const TextCta = ({text, url}) => {
  const navigate = useNavigate();

  const refCursor = useCursorOnHoverArea({
    enterType: "pointer",
    leaveType: "default"
  });


  const navigateTo = () => {
    navigate(url);
  };

  return (
    <button
      className={classes.TextCta}
      onClick={navigateTo}
      ref={refCursor}
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
