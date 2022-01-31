import React, { useState } from 'react';

function Modal() {

  const [isShowModal, setIsModalShow] = useState(false);

  const modalToggle = () => {
    setIsModalShow(!isShowModal);
  }
  return (
    <div>
      <h2>Modal</h2>

      <button className='modal-btn' onClick={modalToggle}>Open Modal</button>

      <div className={
        isShowModal ? 'modal-background' : 'modal-background modal-hidden'
      }>
        <div className='modal-content'>
          <h3>Modal was Opened!</h3>
          <div className='modal-close' onClick={modalToggle}>x</div>
        </div>
      </div>
    </div>
  )
}

export default Modal;