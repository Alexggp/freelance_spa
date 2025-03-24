import React from 'react';
import classes from './Cover.module.css';

import PhotoShooter from '../../../components/PhotoShooter/PhotoShooter';

const Cover = () => {
  return (
    <div className={classes.Cover}>
      <div className={classes.UpperSection}>
        <div className={classes.EmojiContainer}>
          <span role="img" aria-label="smilie">🙂</span>
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
      </div>
    </div>
  );
}

export default Cover;
