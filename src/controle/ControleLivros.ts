import Livro from "../modelo/Livro";

const livros: Livro[] = [
  new Livro(1, 1, "Livro A", "Resumo do livro A", ["Autor 1", "Autor 2"]),
  new Livro(2, 2, "Livro B", "Resumo do livro B", ["Autor 3"]),
  new Livro(3, 3, "Livro C", "Resumo do livro C", ["Autor 4", "Autor 5"]),
];

class ControleLivros {
  obterLivros(): Livro[] {
    return livros;
  }

  incluir(livro: Livro): void {
    const maiorCodigo = Math.max(...livros.map((l) => l.codigo));
    livro.codigo = maiorCodigo + 1;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = livros.findIndex((l) => l.codigo === codigo);
    if (indice !== -1) {
      livros.splice(indice, 1);
    }
  }
}

export default ControleLivros;
