import { useState } from 'react';
import './App.css'

function App(){
  const url = "http://localhost:8080/listar";
  const Req_API = (url) => {
    fetch(url).
    then(response => response.json()).
    then(data => {
      const arrayData = Object.values(data);
      arrayData.forEach((user) => {
        console.log(`Modelo: ${user.marca}, Marca: ${user.nome}`);
      })
    }).
    catch(error => {
      console.log("Erro interno no servidor." + error);
    })
  }
  // Put the endpoint inside the function.
  Req_API(url);
  
  return (
    <>
      <div className="titlesContainer">
        <h1>My WishList</h1>
      </div>
      <div className="containerAddWish">
        <label htmlFor="idWishList">Type:</label>
        <input type="text" placeholder='Add Item'/>
        <button>ADD</button>
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
