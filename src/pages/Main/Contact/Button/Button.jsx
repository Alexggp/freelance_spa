import React, {useState} from 'react';
import classes from './Button.module.css';
import { useTranslation } from 'react-i18next';
import { useCursor } from '../../../../contexts/CursorContext';

const Button = () => {
  const { t } = useTranslation('global');
  const { setCursorType } = useCursor();
  const [isHover, setIsHover] = useState(false);

  const linkToCalendar = ()=> window.open("https://calendar.app.google/VhiRqbK1hoXmENiQA", "_blank")

  const handleEnter = ()=>{
    setCursorType("pointer");
    setIsHover(true);
  }

  const handleLeave = ()=>{
    setCursorType("default")
    setIsHover(false);
  }

  return (
    <button className={classes.Button}
    onClick={linkToCalendar}
    onMouseEnter={handleEnter}
    onMouseLeave={handleLeave}
    >
      <div className={`${classes.Chunck} ${classes.Chunk1} ${isHover ? classes.Hover : ''}`}>{t('main.Contact.button1')}</div>
      <div className={`${classes.Chunck} ${classes.Chunk2} ${isHover ? classes.Hover : ''}`}>{t('main.Contact.button2')}</div>
      <div className={`${classes.Chunck} ${classes.Chunk3} ${isHover ? classes.Hover : ''}`}>{t('main.Contact.button3')}</div>
    </button>
  );

}

export default Button;
