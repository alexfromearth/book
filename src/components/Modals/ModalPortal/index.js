import { useEffect } from 'react';
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
  }, [ModalRoot, element]);

  return createPortal(children, element);
}

export default ModalPortal;
