import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Footer.module.css';
import Logo from '../Logo/Logo';
import inIcon from '../../../assets/icons/svg/linkedin.svg';
import { useCursor } from '../../../contexts/CursorContext';

const EMAIL = 'alejandro.gg.perez@gmail.com';


const Footer = () => {
  const { setCursorType } = useCursor();
  const { t } = useTranslation('global');
  const [showCopied, setShowCopied] = useState(false);
  const timeoutRef = useRef(null);

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
    <footer className={classes.Footer}>
      <div className={classes.Box}>
        <div className={classes.LeftStack}>
          <Logo />
          <div className={classes.Email}
            onClick={handleEmailClick}
            onMouseEnter={() => setCursorType("copy")}
            onMouseLeave={() => setCursorType("default")}
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
            onMouseEnter={() => setCursorType("pointer")}
            onMouseLeave={() => setCursorType("default")}
          >
            <a href="https://www.linkedin.com/in/alejandro-garc%C3%ADa-gasco-p%C3%A9rez-919265132/" target="_blank">
              <img src={inIcon}/>
              </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
