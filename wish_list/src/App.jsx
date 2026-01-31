import { useState } from 'react';
import './App.css'
import e from 'express';

function App(){
  const [task, setTask] = useState("");
  function addTask(){}
  
  return (
    <>
      <div className="titlesContainer">
        <h1>My WishList</h1>
      </div>
      <div className="containerAddWish">
        <label htmlFor="idWishList">Type:</label>
        <input type="text" placeholder='Add Item' value={task} onChange={e => setTask(e.target.value)}/>
        <button onClick={addTask}>ADD</button>
        <div className='ElementsWishList'>
          <div className='box'>ccccc</div>
          <div className='box'>ccccc</div>
          {/* Criar uma tag div dinamicamente e colocar com uma classe box */}
        </div>
      </div>
    </>
  )
}

export default App
