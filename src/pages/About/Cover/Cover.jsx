import React from 'react';
import classes from './Cover.module.css';
import PhotoShooter from '../../../components/PhotoShooter/PhotoShooter';
import Smilie from '../../../components/Smilie/Smilie';
import TitleMarquee from './TitleMarquee/TitleMarquee'; 

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
        <TitleMarquee /> 
      </div>
    </div>
  );
}

export default Cover;
