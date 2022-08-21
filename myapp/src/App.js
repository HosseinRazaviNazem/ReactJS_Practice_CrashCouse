
import './App.css';
import { useState } from 'react';
import Backdrop from './Component/Backdrop/Backdrop';
import Modal from './Component/Modal/Modal';
import Todo from './Component/Todo/Todo';

function App() {
  return (
<>
<h2> My Todos </h2>
<Todo text="first card"/>
<Todo text = "second Card"/>
<Todo text = "tired Card"/>
<Modal/>
<Backdrop/>
</>

  );
}

export default App;
