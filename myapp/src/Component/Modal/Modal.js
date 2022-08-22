import React from 'react';
import './Modal.module.css';


function Modal(props) {
    const deleteHandler = ()=>{

    }
    const confirmHandler =() =>{

    }
  return (
    <div className = "modal" onClick= {props.onClick}>
        <p>Are you sure ?</p>
        <button className="btn btn_confirm " onClick={props.onConfirm}>Confirm</button>
        <button  className="btn btn_cancel " onClick= {props.onCancel}>Cancel</button>
    </div>
  )
}

export default Modal;