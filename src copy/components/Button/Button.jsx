import React from "react";
import classes from './Button.module.css';


/**
 * Button Component
 * 
 * @param {string} color - Sets the button's color. Possible values: "primary" (default), "secondary", "danger", "success" or "error".
 * @param {string} variant - Specifies the button's variant. Can be "filled" (default), "outlined" or "text".
 * @param {boolean} disabled - Disables the button if set to `true`.
 * @param {onClick} function - Callback function triggered when the button is pressed.
 * @param {ReactNode} icon - Optional CustomIcon component.
 * @param {ReactNode} fullWidth - The component will fil the whole width.
 * @param {ReactNode} children - The content to be displayed inside the button.
 * @param {string} className - Allows to pass a css class as parameter.
 * @param {object} style - Inline styles for additional customization.
 * 
 * @example
 * <Button 
 *  disabled = {false}
 *  color="primary"
 *  variant="filled"
 *  onClick={() => alert("Button pressed")}
 *  styles={{ border: '1px solid #ddd' }}
 *  icon={<CustomIcon Icon={MailIcon} />}
 * >
 *  <span>Button text</span>
 * </Button>
 * 
 */

const Button = ({
  color = "primary",      // The button's color, default is "primary".
  variant = "filled",     // The button's variant.
  disabled,               // Boolean to disable the button.
  onClick,                // Callback function.
  icon,                   // Optional button
  style = {} ,            // Optional custom styles
  fullWidth = false,      // Optional full width style
  children,               // Content inside the button.
  className='',            // Custom css class as parameter
  ...rest
}) => {

  const iconButton = !children && icon;
  const btnClasses = `
    ${className}
    ${classes.Btn}
    ${classes['Btn-' + color]}
    ${classes['Btn-' + variant]}
    ${fullWidth ? classes.FullWidth : ''}
    ${iconButton ? classes.IconButton : ''}`;


  return (
    <button disabled={disabled} onClick={onClick} className={btnClasses} {...rest}>
       {icon ? React.cloneElement(icon, { disabled }) : <></>}
       {children}
    </button>
  );
}

export default Button;