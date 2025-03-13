import React from 'react';
import classes from './Modal.module.css';
import Box from '../Box/Box';

/**
 * Modal Component
 * 
 * @param {boolean} show - Determines if the modal is visible.
 * @param {function} setShow - Function to toggle the modal visibility.
 * @param {function} onClose - Callback function to close the modal.
 * @param {string|number} width - Width for the modal content (passed to Box).
 * @param {string|number} height - Height for the modal content (passed to Box).
 * @param {string} background - Background for the modal content (passed to Box).
 * @param {boolean} square - Whether the modal content has square corners (passed to Box).
 * @param {ReactNode} children - Content inside the modal.
 * 
 * @example
 * <Modal 
 *    show={showModal} 
 *    setShow={setShowModal} 
 *    width="500px" 
 *    height="300px" 
 *    background="#fff" 
 *    square={false}
 * >
 *    <p>This is the content of the modal</p>
 * </Modal>
 */

const Modal = ({
  show,
  setShow,
  onClose,
  width="500px",
  height="300px",
  background,
  square,
  children
}) => {

  // Handle close when clicking on the overlay
  const handleOverlayClick = () => {
    setShow(false);
    if (onClose) onClose(); // Trigger the onClose callback if provided
  };

  return (
    show ? (
      <div className={classes.modalOverlay} onClick={handleOverlayClick}>
        <Box
          square
          className={`
            ${classes.boxClass}
            ${!square ? classes.notSquare : ''}
            `}
          width={width}
          height={height}
          background={background}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the box
        >
          {children}
        </Box>
      </div>
    ) : null
  );
};

export default Modal;
