import React from 'react';
import classes from './Grid.module.css';

/**
 * Grid Component
 * 
 * This component organizes its children into a responsive grid layout.
 * The children maintain their intrinsic size, while the gap between 
 * them adjusts dynamically to distribute the items evenly in each row.
 * 
 * @param {ReactNode[]} children - The child components to be placed in the grid.
 * @param {string} [minGap="16px"] - The minimum gap between grid items (default is 16px).
 */
const Grid = ({ children, minGap = '16px' }) => {
  return (
    <div className={classes.GridContainer} style={{ '--min-gap': minGap }}>
      {children}
    </div>
  );
};

export default Grid;