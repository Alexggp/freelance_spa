import React from 'react';
import classes from './Box.module.css';

/**
 * Box component to create a rectangular container with customizable styles.
 * 
 * This component provides a flexible container with optional square corners, 
 * shadow, border, and background customization. It also supports custom dimensions 
 * and centered content.
 * 
 * @param {boolean} [transparent=false] - If true, the background is set to 'transparent'.
 * @param {boolean} square - If true, the corners will be square instead of rounded.
 * @param {boolean} shadow - Adds a shadow to differentiate from the background.
 * @param {string} border - Allows custom border styles (e.g., '1px solid black').
 * @param {boolean} fullSize - If true, the Box will fit the parent size.
 * @param {number} padding - If true, it will add 10px of padding in every dimension.
 * @param {string} background - Background property, can be a URL or a valid CSS color.
 * @param {string|number} [width="100%"] - Width of the Box. If no units are provided, pixels are assumed.
 * @param {string|number} [height="100%"] - Height of the Box. If no units are provided, pixels are assumed.
 * @param {boolean} centered - If true, the content will be centered both vertically and horizontally.
 * @param {React.ReactNode} children - React children elements to be rendered inside the Box.
 * @param {object} style - Additional inline styles for customization.
 * @param {string} className - Allows to pass a css class as parameter.
 * 
 * @example
 * <Box 
 *   square={true} 
 *   shadow={true} 
 *   border="2px solid black" 
 *   background="lightgray" 
 *   width="200px" 
 *   height="300px"
 *   centered={true}
 * >
 *   <p>Content goes here</p>
 * </Box>
 */
const Box = ({
  transparent = false,
  square = false,
  padding = false,
  shadow = false,
  border = 'none',
  background = '',
  fullSize = false,
  width = '100%',
  height = 'auto',
  centered = false,
  children, 
  ...rest
}) => {

  // Check if background is a URL or color code
  const isImageBackground = background.startsWith('http') || background.startsWith('data:image');


  // Helper function to add 'px' if no unit is provided
  const applyUnits = (value) => {
    if (typeof value === 'number' || /^\d+$/.test(value)) {
      return `${value}px`; // Append 'px' for number or unit-less string
    }
    return value; // Return the original value if it has units
  };
  const boxStyles = {
    width: applyUnits(width),
    height: applyUnits(height),
    border,
    borderRadius: square ? '0' : '4px',
    boxShadow: shadow ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
    background: transparent
      ? 'transparent'
      : isImageBackground
        ? `url(${background}) center/cover`
        : background || '#fff', // Default background if not transparent
    padding: padding === true ? '16px' : padding,    
    ...rest.style,
  };

  return (
    <div
      className={`
        ${rest.className}
        ${classes.Box} 
        ${centered ? classes.Centered : ''}
        ${fullSize ? classes.FullSize : ''}`}
        {...rest}
      style={boxStyles}>
      {children}
    </div>
  );
};

export default Box;
