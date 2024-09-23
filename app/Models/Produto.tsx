enum Categoria {
  "racao",
  "brinquedos",
}

export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  preco: number;
  categoria: Categoria;
}
