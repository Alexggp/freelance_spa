import React from 'react';
import classes from './ScrollCta.module.css';

const ScrollCta = () => {

  return (
    <div className={classes.ScrollCta}>
      <span>Scroll</span>
      <div className={classes.Chevron}></div>
    </div>
  );

}

export default ScrollCta;
