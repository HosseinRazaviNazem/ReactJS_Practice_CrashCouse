


import React from 'react';
import './todo.module.css';
import Modal from '../Modal/Modal';
import Backdrop from '../Backdrop/Backdrop';
import { useState} from 'react';

function Todo( props) {
  const  [ModalIsOpen,setModalIsOpen]=useState(false)

     const deleteHandler  = ()=>{
        alert(props.text);
        setModalIsOpen(true);
     }
     const closeHandler = ()=>{
        setModalIsOpen(false);
     }
  return (
    <div className="todo">


<div  className="card">
  <p>{props.text}</p>
  <div>
    <button className="btn" onClick={deleteHandler}>delete</button>
  </div>
  {ModalIsOpen && <Modal  onCancel  = {closeHandler} onConfirm = {closeHandler} />}
  {ModalIsOpen && <Backdrop onClick = {closeHandler}/>}
</div>


</div>

  )
}

export default Todo

