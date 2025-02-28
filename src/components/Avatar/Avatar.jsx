import React from 'react';
import classes from './Avatar.module.css';

/**
 * Avatar component
 * 
 * This component displays a user avatar with a configurable image, fallback options like initials or icons,
 * and optional click functionality. It supports customization in terms of size, shape, border, and background.
 * It also displays a status indicator (online, offline, busy).
 * 
 * @param {string} src - URL of the avatar image.
 * @param {string} alt - Alternative text for the image (used for accessibility).
 * @param {number | string} size - Size of the avatar in pixels or predefined values ("small", "medium", "large").
 * @param {string} shape - Shape of the avatar, can be "circle", "square", or "rounded".
 * @param {ReactNode} fallbackIcon - Icon to display if the image fails to load.
 * @param {string} initials - Initials to display if the image is not provided.
 * @param {string} backgroundColor - Background color of the avatar (useful with initials or fallbackIcon).
 * @param {string} textColor - Text color for the initials.
 * @param {function} onClick - Optional click event handler for the avatar.
 * @param {string} borderColor - Color of the border around the avatar.
 * @param {number} borderWidth - Width of the border in pixels.
 * @param {string} status - Status indicator for the avatar ("online", "offline", "busy", "absent").
 * @param {object} styles - Inline styles for additional customization.
 * 
 * @example
 * <Avatar
 *   src="https://example.com/avatar.jpg"
 *   alt="User Avatar"
 *   size={50}
 *   shape="circle"
 *   borderColor="#fff"
 *   borderWidth={2}
 *   fallbackIcon={<UserIcon />}
 *   initials="JD"
 *   backgroundColor="#eee"
 *   textColor="#333"
 *   onClick={() => alert('Avatar clicked!')}
 *   status="online"
 * />
 */
const Avatar = ({
  src,
  alt = 'Avatar',
  size = 50,
  shape = 'circle',
  fallbackIcon,
  initials,
  backgroundColor = '#ddd',
  textColor = '#fff',
  onClick,
  borderColor,
  borderWidth = 0,
  status,
  ...rest
}) => {

  
  // Maps size to predefined values
  const sizeMapper = (size) => {
    const sizes = {
      small: '30px',
      medium: '50px',
      large: '70px',
    };
    return sizes[size] || '50px';
  };

  // Maps shape to CSS border-radius
  const shapeMapper = (shape) => {
    const shapes = {
      circle: '50%',
      square: '0',
      rounded: '8px',
    };
    return shapes[shape] || '50%';
  };

   // Maps font size to predefined values based on avatar size
   const fontSizeMapper = (size) => {
    const fontSizes = {
      small: '12px',
      medium: '20px',
      large: '28px',
    };
    return fontSizes[size] || '20px';
  };


  const fontSize = typeof size === 'string' ? fontSizeMapper(size) : `${size / 2.5}px`;

  const avatarStyles = {
    width: typeof size === 'string' ? sizeMapper(size) : `${size}px`,
    height: typeof size === 'string' ? sizeMapper(size) : `${size}px`,
    borderRadius: shapeMapper(shape),
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    borderWidth: borderWidth ? `${borderWidth}px` : '0',
    borderStyle: borderWidth ? 'solid' : 'none',
    color: textColor,
    cursor: onClick ? 'pointer' : 'inherit',
    ...{rest},
  };



  // Renders content: image, initials, or fallbackIcon
  const renderContent = () => {
    if (src) {
      return <img src={src} alt={alt} className={classes.AvatarImage} />;
    }

    if (initials) {
      return (
        <span className={classes.Initials} style={{ fontSize }}>
          {initials}
        </span>
      );
    }

    if (fallbackIcon) {
      return (
          React.cloneElement(fallbackIcon, { width:fontSize })
      );
    }

    return null;
  };

  // Render status indicator if provided

  const classStatus = `${classes.Status} ${classes[status]}`;
  const avatarClass = `${classes.Avatar} ${status && classStatus}`

  return (
    <div
      className={avatarClass}
      style={avatarStyles}
      onClick={onClick}
    >
      {renderContent()}
    </div>
  );
};

export default Avatar;
