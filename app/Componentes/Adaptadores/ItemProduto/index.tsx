import { View, Text } from "react-native"
import Style from "@/app/Styles/Default"

function ItemProduto({produto}: {produto: 
    {nome: string, preco: number}}) {
    return (
        <View style={Style.card}>
            <Text style={Style.cardText}>{produto.nome}</Text>
            <Text style={Style.cardText}>{produto.preco}</Text>
        </View>
    )
}

export default ItemProduto