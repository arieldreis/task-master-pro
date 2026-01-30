import { useState } from 'react'
import './App.css'

function App(){
  return (
    <>
      <div className="titlesContainer">
        <h1>My WishList</h1>
        <button onClick={() => window.alert("Oi")}>Remove</button>
      </div>
      <div className="containerAddWish">
        <label htmlFor="idWishList">Type:</label>
        <input type="text" placeholder='Add Item' id='idWishList'/>
        <button>ADD</button>
      </div>
    </>
  )
}

export default App
