import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useCursorOnHoverArea } from '../../../hooks/useCursorOnHoverArea';
import classes from './Logo.module.css';

const Logo = () => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate('/');
  };
  const refCursor = useCursorOnHoverArea({
    enterType: "pointer",
    leaveType: "default"
  });


  return (
    <button className={classes.Logo}
    onClick={navigateTo}
    ref={refCursor}
    >
      A.
    </button>
  );

}

export default Logo;