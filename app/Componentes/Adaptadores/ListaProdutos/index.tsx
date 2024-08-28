import { View, ScrollView } from "react-native"
import ItemProduto from "../ItemProduto"

function ListaProdutos({produtos}: {produtos: 
    {nome: string, preco: number}[]}) {
    return (
        <ScrollView>
        <View>
            {produtos.map((p) => 
                <ItemProduto produto={p}>
                    
                </ItemProduto>)}
        </View>
        </ScrollView>
    )
}

export default ListaProdutos
