import React, { useState, useEffect } from "react";
import ControleLivros from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();

const LinhaLivro = (props) => {
  const { livro, excluir } = props;
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

return (
  <tr>
    <td>{livro.codigo}</td>
    <td>
      {livro.titulo}
      <br />
      <button className="btn btn-danger" onClick={() => excluir(livro.codigo)}>
        Excluir
      </button>
    </td>
    <td>{nomeEditora}</td>
    <td>
      {livro.autores.map((autor, index) => (
        <li key={index}>{autor}</li>
      ))}
    </td>
  </tr>
);
};

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const livrosObtidos = controleLivro.obterLivros();
    setLivros(livrosObtidos);
    setCarregado(true);
  }, []);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false);
  };

  return (
    <main>
      <h2>Catálogo de Livros</h2>
      {carregado ? (
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Editora</th>
              <th>Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>Carregando...</p>
      )}
    </main>
  );
};

export default LivroLista;
