import React from 'react';
import classes from './Cover.module.css';
import PhotoShooter from '../../../components/PhotoShooter/PhotoShooter';
import Smilie from '../../../components/Smilie/Smilie';
import Marquee from './Marquee/Marquee'; 

const Cover = () => {
  return (
    <div className={classes.Cover}>
      <div className={classes.UpperSection}>
        <div className={classes.EmojiContainer}>
          <Smilie />
        </div>
        <div className={classes.PhotosContainer} >
          <PhotoShooter
            fixed={true}
            photosUrl="about"
            intervalMs={800} 
          />
        </div>
      </div>
      <div className={classes.LowerSection}>
        <Marquee /> 
      </div>
    </div>
  );
}

export default Cover;
