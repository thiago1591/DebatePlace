import React from 'react';
import { View,Text,StyleSheet } from 'react-native';


export default props => {
  return (
    <View style={styles.container}>
        <Text style={styles.txt}>Debates Privados</Text>
    </View>)
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  txt:{
    fontSize:25
  }
})
