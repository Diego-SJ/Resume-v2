import React from 'react';

import './Modal.scss';

export default function Modal({
  content,
  isOpen,
  closeModal,
  Modal,
  btnClose = true,
}) {
  return (
    <>
      {isOpen && (
        <Modal className="modal">
          {btnClose && (
            <button onClick={closeModal} className="modal__btn">
              &times;
            </button>
          )}
          {content}
        </Modal>
      )}
    </>
  );
}
