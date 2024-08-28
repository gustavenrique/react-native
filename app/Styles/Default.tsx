import { StyleSheet } from "react-native"

const Style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      paddingStart: 20,
    },
    card: {
      width: 300,
      height: 200,
      backgroundColor: '#fff',
      borderRadius: 10,
      elevation: 5, // Para Android
      shadowColor: '#000', // Para iOS
      shadowOffset: { width: 0, height: 2 }, // Para iOS
      shadowOpacity: 0.1, // Para iOS
      shadowRadius: 4, // Para iOS
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      marginVertical: 5,
    },
    cardText: {
      fontSize: 18,
      color: '#333',
    },
  });

export default Style
