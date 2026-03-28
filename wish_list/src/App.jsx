import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App(){

  // Objeto produto
  const produto = {
    marca: "",
    nome: ""
  };

  // UseState
  const [btnCadastrar, setbtnCadastrar] = useState(true);
  const [objProduto, setObjProduto] = useState(produto);

  // Obtendo os dados do formulário
  const ao_digitar = (e) => {
    setObjProduto({...objProduto, [e.target.name]:e.target.value});
  };

  // Cadastrar produto
  const cadastrar = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/cadastrar", {
      method: "post",
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(response => response.json())
    .then(retorno_convertido => {
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem)
      }else{
        alert("Produto Cadastrado com sucesso.")
      }
    })
    .catch(error => {
      console.log("Erro interno: " + error);
      alert("Erro interno: " + error)
    })
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/formulario' 
            element={ 
            <Formulario 
            botao={btnCadastrar} 
            eventoTeclado={ao_digitar}
            cadastrar={cadastrar}
            /> 
            }
            />

            <Route path='/tabela' element={ <Tabela/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
