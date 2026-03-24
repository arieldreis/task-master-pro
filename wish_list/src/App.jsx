import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/formulario' element={ <Formulario/> }/>
          <Route path='/tabela' element={ <Tabela/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
