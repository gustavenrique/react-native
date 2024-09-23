import { FlatList } from "react-native";
import Produto from "@/app/Models/Produto";
import ItemProduto from "../ItemProduto";
import React from "react";

const ListaProdutos: React.FC<{
  produtos: Produto[];
  aoAtualizar?: Function;
}> = ({ produtos, aoAtualizar }) => (
  <FlatList
    data={produtos}
    keyExtractor={(p) => p.id.toString()}
    renderItem={({ item }) => (
      <ItemProduto
        produto={item}
        aoExcluir={() => aoAtualizar?.call(null)}
      ></ItemProduto>
    )}
  />
);

export default ListaProdutos;
