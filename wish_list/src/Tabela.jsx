import React, { useEffect, useState } from "react";

const Tabela = () => {
  const [dados, setDados] = useState([]);
  const url = "http://localhost:8080/listar";

  useEffect(() => {
    const Req_API = (url) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const arrayData = Array.isArray(data) ? data : Object.values(data);
          setDados(arrayData);
        })
        .catch((error) => {
          console.log("Erro interno no servidor." + error);
        });
    };
    
    // Put the endpoint inside the function.
    Req_API(url);
  });

  return (
    <>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Marca</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {
                dados.map((products) => (
                    <tr key={dados.id}>
                        <td>{products.codigo}</td>
                        <td>{products.marca}</td>
                        <td>{products.nome}</td>
                    </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tabela;
