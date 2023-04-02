import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
    },
    name: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    email: {
      fontSize: 24,
      marginBottom: 16,
    },
    infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    infoTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: 8,
    },
    info: {
      fontSize: 16,
    },
  })

  export default styles