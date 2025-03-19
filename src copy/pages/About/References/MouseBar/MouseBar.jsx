import React from "react";
import  useMousePositionSideSlide  from "../../../../hooks/useMousePositionSideSlide";
import classes from './MouseBar.module.css';

/**
 * MouseBar component that displays a horizontally scrolling container
 * controlled by mouse movement.
 * 
 * @param {object} props 
 * @param {React.ReactNode} props.children - The content to display inside the scrollable container.
 * 
 * @example
 * <MouseBar>
 *   <div className={classes.LogoContainer}><img src={logo} alt="Example" /></div>
 * </MouseBar>
 */
const MouseBar = ({ children }) => {
  const scrollRef = useMousePositionSideSlide();

  return (
    <div className={classes.MouseBarContainer}>
      <div ref={scrollRef} className={classes.MouseBar}>
        {children}
      </div>
    </div>
  );
};

export default MouseBar;
