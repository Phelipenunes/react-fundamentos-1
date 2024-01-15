import { useState } from "react";

function Produtos() {
  const [prosutos, setProdutos] = useState([]);
  /* o state "produtos" é iniciado como um array vazio posteriomente (após o carregamento dos dados da API), ele será preenchido com os objetos */
  const carregarDados = async () => {
    try {
      const resposta = await fetch(`https://fakestoreapi.com/products`);
      const dados = await resposta.json();
      console.log(dados);
      setProdutos(dados);
    } catch (error) {
      console.error("Houve um erro: " + error);
    }
  };

  carregarDados();
  return <h2>Produtos</h2>;
}

export default Produtos;
