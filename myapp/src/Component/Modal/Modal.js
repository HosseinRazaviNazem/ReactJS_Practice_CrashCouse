import React from 'react';
import './Modal.module.css';

function Modal() {
  return (
    <div className = "modal">
        <p>Are you sure ?</p>
        <button className="btn btn_confirm ">Confirm</button>
        <button  className="btn btn_cancel ">Cancel</button>
    </div>
  )
}

export default Modal;