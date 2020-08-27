import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

function ModalPortal({ children, className }) {
  const ModalRoot = document.getElementById('modal');
  const element = document.createElement('div');
  element.classList.add(className);

  useEffect(() => {
    ModalRoot.appendChild(element);

    return () => {
      ModalRoot.removeChild(element);
    };
  }, []);

  return createPortal(children, element);
}

export default ModalPortal;
