import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function DetalhesProduto() {
  const { id } = useParams();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch(`https://fakestoreapi.com/products/${id}`);
        const dados = await resposta.json();
        setProdutos(dados);
        setLoading(false);
      } catch (error) {
        console.error("Houve um erro: " + error);
      }
    };
    carregarDados();
  }, [id]);

  return (
    <article>
      <h2>{produtos.title}</h2>
      <br />
      <p>
        <b>Categoria:</b> {produtos.category}
      </p>
      <br />
      <p>
        <b>Preço:</b> {produtos.price}
      </p>
      <br />
      <p>
        <b>Descrição:</b> {produtos.description}
      </p>
      <br />
      <p>
        <img style={{ maxWidth: "10vw" }} src={produtos.image} alt="" />
      </p>
    </article>
  );
}

export default DetalhesProduto;
