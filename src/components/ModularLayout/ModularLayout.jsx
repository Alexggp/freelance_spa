import React from 'react';
import classes from './ModularLayout.module.css';
import ModularContainer from './ModularContainer/ModularContainer';

/**
 * ModularLayout component
 * 
 * A layout component that divides its container into 12 virtual sections,
 * either horizontally or vertically, and lays out its children accordingly.
 * 
 * @param {'horizontal'|'vertical'} [direction='horizontal'] - Defines the layout direction. 
 * In horizontal, children are laid out from left to right. In vertical, from top to bottom.
 * @param {number} [gutterSize=0] - The space (in pixels) between the sections.
 * @param {object} style - Additional inline style for the layout.
 * @param {React.ReactNode} children - The `ModularContainer` children to be placed inside the layout.
 * 
 * @example
 * <ModularLayout direction="vertical" gutterSize={10}>
 *   <ModularContainer size={6} display="cover" />
 *   <ModularContainer size={6} collapsed=false />
 * </ModularLayout>
 */
const ModularLayout = ({ 
  direction = 'horizontal', 
  gutterSize = 0, 
  style = {},
  children,
  ...rest
}) => {
  return (
    <div 
      className={`${classes.ModularLayout} ${direction === 'vertical' ? classes.Vertical : classes.Horizontal}`} 
      style={{ gap: `${gutterSize}px` , ...style}}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ModularLayout;
export {ModularContainer}