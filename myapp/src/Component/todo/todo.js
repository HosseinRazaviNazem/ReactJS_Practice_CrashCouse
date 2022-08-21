


import React from 'react';
import './todo.module.css';

function todo( props) {

     const deleteHandler  = ()=>{


     }
  return (
    <div className="todo">


<div  className="card">
  <p>{props.text}</p>
  <div>
    <button className="btn" onClick={deleteHandler}>delete</button>
  </div>
</div>


</div>

  )
}

export default todo

