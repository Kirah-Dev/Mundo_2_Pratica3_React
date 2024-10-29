import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ControleLivros from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";
import Livro from "./modelo/Livro";

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();

const LivroDados = () => {
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(0);
  const navigate = useNavigate();

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = (event) => {
    event.preventDefault();
    const novoLivro = new Livro(
      0,
      codEditora,
      titulo,
      resumo,
      autores.split("\n")
    );
    controleLivro.incluir(novoLivro);
    navigate("/");
  };

  return (
    <main>
      <h1>Dados do Livro</h1>
      <form onSubmit={incluir}>
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="resumo">Resumo</label>
          <textarea
            className="form-control"
            id="resumo"
            rows="3"
            value={resumo}
            onChange={(event) => setResumo(event.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="codEditora">Editora</label>
          <select
            className="form-control"
            id="codEditora"
            value={codEditora}
            onChange={tratarCombo}
          >
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="autores">Autores (1 por linha)</label>
          <textarea
            className="form-control"
            id="autores"
            rows="3"
            value={autores}
            onChange={(event) => setAutores(event.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Salvar Dados
        </button>
      </form>
    </main>
  );
};

export default LivroDados;
