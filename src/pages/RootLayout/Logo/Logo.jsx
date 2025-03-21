import React from 'react';
import { useCursor } from '../../../contexts/CursorContext';
import { useNavigate } from 'react-router-dom';

import classes from './Logo.module.css';

const Logo = () => {
  const { setCursorType } = useCursor();
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate('/');
  };


  return (
    <div className={classes.Logo}
    onClick={navigateTo}
    onMouseEnter={() => setCursorType("pointer")}
    onMouseLeave={() => setCursorType("default")}
    >
      A.
    </div>
  );

}

export default Logo;