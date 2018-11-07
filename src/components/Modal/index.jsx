import PropTypes from 'prop-types';
import React from 'react';
import './Modal.css';
import Button from '@material-ui/core/Button';

const Modal = ({ children, closeModal }) => {
  return (
    <div className="modalContainer">
      <div className="modal">
        {children}

        <Button variant="contained" color="primary" onClick={closeModal}>
          Close modal
        </Button>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  visible: false
};

Modal.propTypes = {
  closeModal: PropTypes.func
};

export default Modal;
