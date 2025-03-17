import React, { useState, useEffect, useRef } from 'react';
import classes from './Input.module.css';

/**
 * Custom Input component with optional floating label. 
 * When `floatingLabel` is true, the label appears inside the input and moves to the top on focus or input.
 * 
 * @param {string} [variant='standard'] - Defines the style of the input (outlined, standard, filled).
 * @param {boolean} [disabled=false] - If true, disables the input.
 * @param {string} [label] - Label for the input field.
 * @param {boolean} [error=false] - If true, applies error styles.
 * @param {boolean} [floatingLabel=false] - If true, the label acts as a placeholder inside the input and floats on focus or input.
 * @param {type} [string = 'text'] - Defines the type of input element.
 * @param {resizable} [resizable=false] - If true and multiline, the textarea will be resizable. 
 * @param {function} [onEnter] - Callback function to be executed when the Enter key is pressed while the input is focused.
 * @param {any} rest - Any other native HTML input attributes.
 * @param {object} style - Inline styles for additional customization.
 * @param {ReactNode} fullWidth - The component will fill the whole width.
 * @param {ReactNode[]} children - The child components to be placed in the input.
 * 
 * @example
 * <Input 
 *   variant="outlined" 
 *   label="Username" 
 *   error={false} 
 *   floatingLabel={true} 
 *   placeholder=""
 *   onEnter={() => console.log("Enter pressed")}
 *   disabled
 * />
 */
const Input = ({
  variant = 'standard',
  label,
  type = 'text',
  error = false,
  disabled = false,
  floatingLabel = false,
  fullWidth = false,
  multiline = false,
  style = {},            // Optional custom styles
  resizable = false,
  onEnter,               // New prop to handle Enter key press
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!rest.value); // Detect if input has initial value
  const [backgroundColor, setBackgroundColor] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    // Only if variant === outlined and not disabled
    // This function looks for the background color of the first parent element with background color
    // in order to fill the label rectangle to overlay the input border. 
    const findBackgroundColor = (element) => {
      let parent = element.parentElement;
      while (parent) {
        const computedStyle = window.getComputedStyle(parent);
        const bgColor = computedStyle.backgroundColor;

        if (bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          return bgColor;
        }

        parent = parent.parentElement;
      }
      return null;
    };

    if (variant === 'outlined' && !disabled && inputRef.current) {
      const bgColor = findBackgroundColor(inputRef.current);
      setBackgroundColor(bgColor || 'transparent');
    }
  }, [variant, disabled]);

  useEffect(() => {
    // Listener for the Enter key
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && onEnter && type!=='textarea') {
        onEnter();
      }
    };

    const inputEl = inputRef.current;
    inputEl?.addEventListener('keydown', handleKeyDown);

    return () => {
      inputEl?.removeEventListener('keydown', handleKeyDown);
    };
  }, [onEnter, type]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(!!e.target.value); // Check if input has value after blur
  };

  const ErrorMessage = error.message || 'Error: Invalid value';

  const tagsMap = {
    text: 'input',
    multiline: 'textarea',
    select: 'select'
  };

  const InputTag = tagsMap[type] || 'input';

  return (
    <div className={`
      ${classes.InputContainer}
      ${fullWidth ? classes.FullWidth : ''}`}
      style={style}>
      {type === 'search' ? 
        <span className={`
          ${variant === 'outlined' ? classes.SearchIconOutlined : ''}
          ${classes.SearchIcon}
        `}>
          <CustomIcon Icon={SearchIcon} />
        </span> : ''}
      {label && (
        <label
          style={variant === 'outlined' ? { backgroundColor: backgroundColor } : {}}
          className={`
            ${classes.Label} 
            ${error ? classes.Error : ''}
            ${disabled ? classes.Disabled : ''}
            ${floatingLabel && !rest.placeholder && type !== 'select' && type !== 'search' && !isFocused && !hasValue ? classes.LabelInside : ''} 
            ${isFocused ? classes.LabelFocused : ''}
            ${classes[variant.charAt(0).toUpperCase() + variant.slice(1) + 'Label']} 
          `}
        >
          {label}
        </label>
      )}

      <InputTag
        ref={inputRef}
        className={`
          ${classes.InputField} 
          ${classes[variant.charAt(0).toUpperCase() + variant.slice(1)]} 
          ${classes[type.charAt(0).toUpperCase() + type.slice(1)]} 
          ${error ? classes.Error : ''} 
          ${resizable ? classes.Resizable : ''} 
          ${disabled ? classes.Disabled : ''}
          ${type === 'search' ? classes.Search : ''}
        `}
        type={type}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => setHasValue(!!e.target.value)} // Update hasValue on change
        {...rest} // Spread all native input attributes
      >
        {rest.children}
      </InputTag>
      {error && <p className={classes.ErrorMessage}>{ErrorMessage}</p>}
    </div>
  );
};

export default Input;
