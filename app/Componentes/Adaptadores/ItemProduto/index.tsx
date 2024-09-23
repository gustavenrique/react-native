import { Alert, Button, Image, Text, View } from "react-native";
import Produto from "@/app/Models/Produto";
import Style from "@/app/Styles/Default";
import axios from "axios";
import React from "react";

const ItemProduto: React.FC<{
  produto: Produto;
  aoExcluir?: Function;
}> = ({ produto, aoExcluir }) => {
  console.log(produto);

  function Excluir(id: number) {
    const BASE_URL = "https://api-docker-2t8m.onrender.com/api/produtos";

    axios.delete(`${BASE_URL}/${id}`).then(() => {
      aoExcluir?.call(null);

      Alert.alert("Produto excluído com sucesso");
    });
  }

  return (
    <View style={Style.card}>
      <Text style={Style.cardText}>{produto.nome}</Text>
      <Text style={Style.cardText}>{produto.preco}</Text>
      <Text style={Style.cardText}>{produto.descricao}</Text>
      <Image source={{ uri: produto.foto }} style={Style.image} />
      <Button
        title="Excluir"
        onPress={() => {
          Excluir(produto.id);
        }}
      />
    </View>
  );
};

export default ItemProduto;
