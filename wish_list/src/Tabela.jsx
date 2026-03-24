import React from "react";

const Tabela = () => {
  const url = "http://localhost:8080/listar";
  const Req_API = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const arrayData = Object.values(data);
        arrayData.forEach((user) => {
          console.log(`Modelo: ${user.marca}, Marca: ${user.nome}`);
        });
      })
      .catch((error) => {
        console.log("Erro interno no servidor." + error);
      });
  };
  // Put the endpoint inside the function.
  Req_API(url);
  return (
    <>
        <div>
            
        </div>
    </>
  )
};

export default Tabela;
