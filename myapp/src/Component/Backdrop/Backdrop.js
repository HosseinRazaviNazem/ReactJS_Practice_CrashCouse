import React from 'react'
import './Backdrop.Module.css';

function Backdrop(props) {
  return (
    <div className= "backdrop" onClick={props.onClick}/>
  )
}

export default Backdrop