import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity} from 'react-native';

export default props => {
  return <View style={{ padding: 15,flex:1,backgroundColor:'white' }}>

    <View style={{ alignItems: 'center' }}>
      <Text style={styles.txtTitulo}>Questão 4 de 30</Text>
      <View style={styles.barraProgresso}></View>
    </View>

    <View style={{flex:5,justifyContent:'center'}}>
      <Text style={styles.txtQuestao}>
O governo deveria definir um limite para o salário dos banqueiros e CEOs.</Text>
    </View>

    <View style={{alignItems:'center',marginTop:25,flex:5}}>
      <TouchableOpacity style={[styles.btn,{backgroundColor:'#2B9A4A'}]}>
        <Text style={styles.txtBtn}>Concordo fortemente</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn,{backgroundColor:'#52D878'}]}>
        <Text style={styles.txtBtn}>Concordo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn,{backgroundColor:'#DE6565'}]}>
        <Text style={styles.txtBtn}>Discordo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn,{backgroundColor:'#DA3232'}]}>
        <Text style={styles.txtBtn}>Discordo fortemente</Text>
      </TouchableOpacity>
    </View>
    <View style={{flex:1}}></View>
  </View>;
}

const styles = StyleSheet.create({
  barraProgresso: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
    height: 30
  },
  txtTitulo: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
  },
  txtQuestao:{
    fontSize:25,
    textAlign:'center'
  },
  btn:{
    width:'80%',
    padding:16,
    borderRadius:3,
    marginTop:10
  },
  txtBtn:{
    color:'white',
    fontWeight:'bold',
    fontSize:18,
    textAlign:'center'
  }
})

