import React from 'react';
import classes from './Smilie.module.css';

const Smilie = () => {
  
  return (
    <div className={classes.Smilie}>
      <div className={classes.Eyes}>
        <div className={`${classes.Eye} ${classes.Blinkable}`}></div>
        <div className={classes.Eye}></div>
      </div>
      <div className={classes.Mouth}>
      <div className={classes.Tongue}></div>
      </div>
    </div>
  );
}

export default Smilie;
