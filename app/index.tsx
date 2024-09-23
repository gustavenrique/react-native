import axios from "axios";
import { useFocusEffect, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import ListaProdutos from "./Componentes/Adaptadores/ListaProdutos";

export default function Index() {
  const router = useRouter();
  let [produtos, setProdutos] = useState([]);

  useFocusEffect(() => {
    carregaProdutos();
  });

  useEffect(() => {
    carregaProdutos();
  }, []);

  function carregaProdutos() {
    axios
      .get("https://api-docker-2t8m.onrender.com/api/produtos")
      .then((resp) => {
        setProdutos(resp.data);
      });
  }

  return (
    <View style={estilo.container}>
      <ListaProdutos
        produtos={produtos}
        aoAtualizar={carregaProdutos}
      />

      <Button
        title="Cadastrar"
        onPress={() => {
          telaCadastro();
        }}
      />
    </View>
  );

  function telaCadastro() {
    router.push("/Telas/Cadastro");
  }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  titulo: {
    color: "#000000",
    fontSize: 30,
    textAlign: "left",
    fontWeight: "bold",
  },
});
