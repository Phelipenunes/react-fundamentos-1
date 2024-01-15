import { useEffect } from "react";
import { useState } from "react";

function Produtos() {
  /* o state "produtos" é iniciado como um array vazio posteriomente (após o carregamento dos dados da API), ele será preenchido com os objetos */
  const [produtos, setProdutos] = useState([]);

  const [loading, setLoading] = useState(true);

  /* Gerenciando o efeito colateral do componentepara o carregamento dos dados da API */
  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch(`https://fakestoreapi.com/products`);
        const dados = await resposta.json();
        console.log(dados);
        setProdutos(dados);
        setLoading(false);
      } catch (error) {
        console.error("Houve um erro: " + error);
      }
    };
    carregarDados();
  }, []);

  return (
    <article>
      <h2>Produtos</h2>
      {loading ? (
        <p>Carregando dados</p>
      ) : (
        produtos.map((produtos) => {
          return (
            <section key={produtos.id}>
              <h3>{produtos.title}</h3>
              <p>Preço: {produtos.price}</p>
              <p>descrição: {produtos.description}</p>
            </section>
          );
        })
      )}
    </article>
  );
}

export default Produtos;
