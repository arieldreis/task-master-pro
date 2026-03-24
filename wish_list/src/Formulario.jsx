import React from 'react';
import './App.css';

const Formulario = () => {
  return (
    <>
    <div className="form-container">
        <h2>Cadastro de Inventário</h2>
        
        <form action="#" method="POST">
            <div className="input-group">
                <label htmlFor="id_produto">ID (Chave Primária)</label>
                <input type="number" id="id_produto" name="id_produto" placeholder="Ex: 101" required />
            </div>

            <div className="input-group">
                <label htmlFor="marca">Marca do Produto</label>
                <input type="text" id="marca" name="marca" placeholder="Ex: Samsung" required />
            </div>

            <div className="input-group">
                <label htmlFor="nome">Nome do Produto</label>
                <input type="text" id="nome" name="nome" placeholder="Ex: Monitor LED 24'" required />
            </div>

            <div className="button-grid">
                <button type="submit" className="btn btn-save">Cadastrar</button>
                <button type="submit" className="btn btn-edit">Alterar</button>
                <button type="submit" className="btn btn-delete">Remover</button>
                <button type="reset" className="btn btn-cancel">Cancelar</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Formulario
