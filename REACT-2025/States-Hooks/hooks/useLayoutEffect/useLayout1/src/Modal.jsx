import { useRef, useLayoutEffect } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    if (isOpen) {
      // Focus and scroll happen BEFORE the user sees the modal
      inputRef.current?.focus();
      inputRef.current?.scrollIntoView({ behavior: 'instant', block: 'center' });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <input ref={inputRef} placeholder="Type something..." />
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Modal;