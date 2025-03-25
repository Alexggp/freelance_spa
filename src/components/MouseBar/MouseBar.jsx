import React from "react";
import { useMousePositionSideSlide } from '../../hooks/useMousePositionSideSlide';
import useScreenSize from '../../hooks/useScreenSize';
import classes from './MouseBar.module.css';

/**
 * MouseBar component that displays a horizontally scrolling container
 * controlled by mouse movement or manual scroll.
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
  const { isDesktop } = useScreenSize();
  const scrollRef = useMousePositionSideSlide();

  return (
    <div className={classes.MouseBarContainer}>
      <div ref={isDesktop ? scrollRef : null} className={classes.MouseBar} style={{ overflowX: !isDesktop && 'auto' }}>
        {children}
      </div>
    </div>
  );
};

export default MouseBar;
