import "./App.css";

const Formulario = ({botao, eventoTeclado, cadastrar, objProduto}) => {
  return (
    <>
      <div className="form-container">
        <h2>Cadastro de Inventário</h2>

        <form>
          {/* <div className="input-group">
            <label htmlFor="id_produto">ID (Chave Primária)</label>
            <input
              type="number"
              id="id_produto"
              name="id_produto"
              placeholder="Ex: 101"
              required
              onChange={eventoTeclado}
            />
          </div> */}

          <div className="input-group">
            <label htmlFor="marca">Marca do Produto</label>
            <input
              type="text"
              name="marca"
              placeholder="Ex: Samsung"
              required
              onChange={eventoTeclado}
              value={objProduto}
            />
          </div>

          <div className="input-group">
            <label htmlFor="nome">Nome do Produto</label>
            <input
              type="text"
              name="nome"
              placeholder="Ex: Monitor LED 24'"
              required
              onChange={eventoTeclado}
              value={objProduto}
            />
          </div>

          <div className="button-grid">
            {botao ? (
              <button type="submit" className="btn btn-save" onClick={cadastrar}>
                Cadastrar
              </button>
            ) : (
              <div className="space_buttons">
                <button type="submit" className="btn btn-edit">
                  Alterar
                </button>
                <button type="submit" className="btn btn-delete">
                  Remover
                </button>
                <button type="reset" className="btn btn-cancel">
                  Cancelar
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Formulario;
