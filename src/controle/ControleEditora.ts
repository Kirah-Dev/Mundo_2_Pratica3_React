import Editora from "../modelo/Editora";

const editoras: Editora[] = [
  new Editora(1, "Editora A"),
  new Editora(2, "Editora B"),
  new Editora(3, "Editora C"),
];

class ControleEditora {
  getEditoras(): Editora[] {
    return editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = editoras.filter(
      (editora) => editora.codEditora === codEditora
    )[0];
    return editora ? editora.nome : "";
  }
}

export default ControleEditora;
