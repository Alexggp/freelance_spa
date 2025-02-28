// ModularContainer.jsx
import React from 'react';
import classes from './ModularContainer.module.css';

/**
 * ModularContainer component
 * 
 * Container used as module of a ModularLayout
 * 
 * @param {number} size - Number of sections to occupy (1 to 12).
 * @param {'flexible'|'cover'|'fixed'} display - Whether size is flexible or fixed or the container should cover available space.
 * @param {boolean} collapsed - Whether the container is collapsed.
 * @param {Function} onResize - Callback when the container is resized.
 * @param {React.ReactNode} collapsedContent - The content inside the container when is collapsed.
 * @param {React.ReactNode} children - The content inside the container.
 * 
 * @example
 * <ModularContainer 
 *    size={6} 
 *    display="flexible" 
 *    collapsed = false
 *    collapsedContent = <button>Collapse<button/>
 * >
 *   Content
 * </ModularContainer>
 */
const ModularContainer = ({
  size = 1,
  display = 'flexible',
  collapsed = false,
  collapsedContent,
  children,
  styles = {},
  className = null,
  ...rest
}) => {

  if (display === 'cover' && collapsed) {
    console.warn("ModularContainer with display cover is not collapsible");
    collapsed = false;
  }

  const flexOptions = {
    cover: 1,
    flexible: `0 0 ${(size / 12) * 100}%`,
    fixed: `0 0 ${size}px`
  }

  const containerStyle = {
    flex: flexOptions[display],
    ...styles
  };

  return (
    <div
      className={`${classes.ModularContainer} ${className} ${collapsed ? classes.Collapsed : ''}`}
      {...rest}
      style={containerStyle}>
      <div className={classes.Content}>
        {!collapsed ? children : collapsedContent}
      </div>
    </div>
  );
};

export default ModularContainer;
