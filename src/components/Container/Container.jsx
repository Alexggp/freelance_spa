import React from 'react';
import classes from './Container.module.css';

/**
 * Container component
 * 
 * This component is used to wrap content with a consistent lateral padding and
 * optional center alignment. It supports responsive width control through preset sizes.
 * 
 * @param {ReactNode} children - The content inside the container.
 * @param {string | number} padding - Padding value for the container (e.g., '20px', '1rem').
 * @param {'sm' | 'md' | 'lg' | 'xl' | 'fs' } size - Maximum width of the container. Predefined sizes: 'sm', 'md', 'lg', 'xl', 'fs'.
 * @param {boolean} centered - If true, the content will be centered both vertically and horizontally.
 * @param {string} backgroundColor - Custom background color for the container.
 * @param {object} style - Additional inline style for the container.
 * @param {string} className - Allows to pass a css class as parameter.
 * 
 * 
 * @example
 * <Container
 *   padding="20px"
 *   size="lg"
 *   center
 *   backgroundColor="#f0f0f0"
 *   style={{ border: '1px solid #ddd' }}
 * >
 *   <h1>Welcome to My Page</h1>
 *   <p>This is some content inside a centered container.</p>
 * </Container>
 */
const Container = ({ 
  children, 
  padding = '16px', 
  size, 
  centered = false, 
  backgroundColor = 'transparent', 
  style = {},
  className = '',
  ...rest
}) => {

  // Map the predefined sizes to their corresponding max-width values
  const sizeClass = {
    sm: classes.MaxWidthSm,
    md: classes.MaxWidthMd,
    lg: classes.MaxWidthLg,
    xl: classes.MaxWidthXl,
    fs: classes.FullSize
  }[size] || '';

  return (
    <div
      className={`
        ${className}
        ${classes.Container}
        ${sizeClass} 
        ${centered ? classes.Centered : ''}`}
      style={{ padding, backgroundColor, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
