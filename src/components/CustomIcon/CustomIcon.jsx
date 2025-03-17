import React from 'react';

/**
 * CustomIcon Component
 * 
 * This component renders an SVG icon with customizable size and color. The SVG component is
 * passed in as a prop, allowing for flexible icon rendering.
 * 
 * @param {React.FC<React.SVGProps<SVGSVGElement>>} Icon - The SVG component to be rendered. This should
 *                          be a React component representing an SVG icon. It will be rendered with the
 *                          specified `width`, `height`, and `fill` properties.
 * @param {string} width - Specifies the width of the SVG icon. Can be any valid CSS unit (e.g., px, em, %).
 *                         Default value: '24px'.
 * @param {string} height - Specifies the height of the SVG icon. Like width, it accepts any valid CSS unit.
 *                          Default value: '24px'.
 * @param {string} color - Sets the fill color of the SVG icon. Typically used to match the color of the icon with
 *                         the text or surrounding elements. Default value: 'currentColor', which inherits the
 *                         color from the parent element.
 * @param {boolean} disabled - Optional flag to disable the Icon and apply a disabled style.
 */
const CustomIcon = ({
  Icon,
  onClick,
  width,
  height,
  color = 'currentColor',
  disabled,
  style: customStyle = {}, // Estilos pasados desde las props
  ...rest
}) => {
  const disabledStyles = disabled
    ? { cursor: 'not-allowed', opacity: '0.5' }
    : {};

  const computedStyle = {
    cursor: onClick ? 'pointer' : 'inherit',
    ...(width && { width }), // Añade `width` solo si existe
    ...(height && { height }), // Añade `height` solo si existe
    ...disabledStyles, // Añade estilos si el componente está deshabilitado
    ...customStyle, // Combina con los estilos personalizados pasados como props
  };

  return (
    <Icon
      width={width || '24px'} // Se pasa como prop solo si existe
      height={height || '24px'} // Se pasa como prop solo si existe
      fill={color}
      style={computedStyle} // Estilos combinados
      onClick={!disabled ? onClick : null}
      {...rest}
      aria-hidden="true"
    />
  );
};


export default CustomIcon;