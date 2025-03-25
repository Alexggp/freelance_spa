import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Footer.module.css';
import Logo from '../Logo/Logo';
import inIcon from '../../../assets/icons/svg/linkedin.svg';
import inIconWhite from '../../../assets/icons/svg/linkedin_white.svg';

import { useCursorOnHoverArea } from '../../../hooks/useCursorOnHoverArea';

const EMAIL = 'alejandro.gg.perez@gmail.com';


const Footer = ({alternative}) => {
  const { t } = useTranslation('global');
  const [showCopied, setShowCopied] = useState(false);
  const timeoutRef = useRef(null);

  const refCopy = useCursorOnHoverArea({
    enterType: "copy",
    leaveType: "default"
  });

  const refCursor = useCursorOnHoverArea({
    enterType: "pointer",
    leaveType: "default"
  });

  
  const handleEmailClick = () => {
    navigator.clipboard.writeText(EMAIL);

    // Reiniciar animación
    setShowCopied(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Forzar un re-render del span para reiniciar animación
    requestAnimationFrame(() => {
      setShowCopied(true);
      timeoutRef.current = setTimeout(() => {
        setShowCopied(false);
      }, 1500); // duración de la animación
    });
  };

  return (
    <footer className={`${classes.Footer} ${alternative ? classes.AltStyle : null}`}>
      <div className={classes.Box}>
        <div className={classes.LeftStack}>
          <Logo />
          <div className={classes.Email}
            onClick={handleEmailClick}
            ref={refCopy}
          >
            <span>{EMAIL}</span>
          </div>
          {showCopied && (
            <div className={`${classes.CopiedSpan} ${classes.Animate}`}>
              <span>{t('root.Footer.copied')}</span>
            </div>
          )}
        </div>
        <div className={classes.RightStack}>
          <div className={classes.IconContainer}
            ref={refCursor}
          >
            <a href="https://www.linkedin.com/in/alejandro-garc%C3%ADa-gasco-p%C3%A9rez-919265132/" target="_blank">
              <img src={alternative ? inIconWhite : inIcon}/>
              </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
