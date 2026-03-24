import React from 'react';
import './App.css';

const Formulario = () => {
  return (
    <>
    <div>
      <div className="form-container">
        <form>
            <h2>Entre em Contato</h2>
            <p>Preencha os campos abaixo para nos enviar uma mensagem.</p>
            
            <div className="input-group">
                <input type="text" id="nome" name="nome" placeholder=" " required />
                <label htmlFor="nome">Nome Completo</label>
            </div>

            <div className="input-group">
                <input type="email" id="email" name="email" placeholder=" " required />
                <label htmlFor="email">E-mail</label>
            </div>

            <div className="input-group">
                <textarea id="mensagem" name="mensagem" rows="5" placeholder=" " required></textarea>
                <label htmlFor="mensagem">Mensagem</label>
            </div>

            <button type="submit">Enviar Mensagem</button>
        </form>
    </div>
    </div>
    </>
  )
}

export default Formulario
