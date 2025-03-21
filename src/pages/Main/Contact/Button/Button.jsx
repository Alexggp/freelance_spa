import React from 'react';
import classes from './Button.module.css';
import { useTranslation } from 'react-i18next';
import { useCursor } from '../../../../contexts/CursorContext';

const Button = () => {
  const { t } = useTranslation('global');
  const { cursorType, setCursorType } = useCursor();

  return (
    <div className={classes.Button}
    onClick={()=>alert('contactar')}
    onMouseEnter={() => setCursorType("pointer")}
    onMouseLeave={() => setCursorType("default")}
    >
      <div className={`${classes.Chunck} ${classes.Chunk1} ${cursorType==='pointer' ? classes.Hover : ''}`}>{t('main.Contact.button1')}</div>
      <div className={`${classes.Chunck} ${classes.Chunk2} ${cursorType==='pointer' ? classes.Hover : ''}`}>{t('main.Contact.button2')}</div>
      <div className={`${classes.Chunck} ${classes.Chunk3} ${cursorType==='pointer' ? classes.Hover : ''}`}>{t('main.Contact.button3')}</div>
    </div>
  );

}

export default Button;
