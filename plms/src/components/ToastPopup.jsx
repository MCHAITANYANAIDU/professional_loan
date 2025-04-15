// src/components/ToastPopup.jsx
import React, { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const ToastPopup = ({ message, variant }) => {
  const [show, setShow] = useState(true);

  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast show={show} onClose={() => setShow(false)} bg={variant} delay={3000} autohide>
        <Toast.Body>
          {variant === 'success' ? '🎉 ' : '🤔 '}
          {message}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastPopup;
