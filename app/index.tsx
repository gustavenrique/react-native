import { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
const produtos = [
  {id: 1, nome: "Coca-cola", preco: 5.5},
  {id: 2, nome: "Pepsi", preco: 5.5},
  {id: 3, nome: "Fanta", preco: 5.5},
  {id: 4, nome: "Guaraná", preco: 5.5}
]

export default function Index() {
  let [contador, setContador] = useState(0);

  return (
    <View
      style={estilo.container}
    >
      {produtos.map((p)=> (
        <View>
        <Text style={estilo.titulo}>{p.nome}</Text>
        <Text>{p.preco}</Text> 
       </View>
    ))}
      <Button 
        title={contador.toString()} 
        onPress={()=>setContador(contador += 1)}
        color={'#3399ff'}
      ></Button>
    
    </View>
  );
}

  const estilo = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "#d9e8ed",
      padding: 20,
    },
    titulo:{
      color:"#000000",
      fontFamily: 'helvetica',
      fontSize: 30,
      fontWeight: "bold",  
      textAlign: "left",
    }
  })
