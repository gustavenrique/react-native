import { ScrollView, View } from "react-native";
import Produto from "@/app/Models/Produto";
import ItemProduto from "../ItemProduto";
import Style from "@/app/Styles/Default";
import React from "react";

const ListaProdutos: React.FC<{
  produtos: Produto[];
  aoAtualizar?: Function;
}> = ({ produtos, aoAtualizar }) => {
  return (
    <ScrollView>
      <View style={Style.container}>
        {produtos.map((p) => (
          <ItemProduto
            produto={p}
            key={p.id}
            aoExcluir={() => {
              aoAtualizar?.call(null);
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default ListaProdutos;
