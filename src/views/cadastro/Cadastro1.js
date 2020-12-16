import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Header from '../../components/Header'
import Botao from '../../components/Botao'


export default props => {
  return <View style={style.container}>
    <View>
      <Header />
    </View>

    <View>
      <Text style={style.titulo}>Cadastrar</Text>
        <TextInput
          placeholder="Nome"
          style={{ borderColor: 'gray', borderBottomWidth: 1 }}>
        </TextInput>

      <View style={style.input}>
        <TextInput
          placeholder="E-mail"
          style={{ borderColor: 'gray', borderBottomWidth: 1 }}>
        </TextInput>
      </View>

      <View style={style.input}>
        <TextInput
          placeholder="Senha"
          style={{ borderColor: 'gray', borderBottomWidth: 1 }}>
        </TextInput>
      </View>
    </View>


    <View>
      <Botao nome="Continuar" avancar="Cadastro2"></Botao>
      <TouchableOpacity>
        <Text style={style.btnEntrar}>Já possui cadastro? Entre</Text>
      </TouchableOpacity>
    </View>

    </View>
}

const style = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: '#FFF',
    flex:1
  },
  titulo: {
    fontSize: 25,
    marginTop:25,
    marginBottom:5
  },
  input:{
    paddingTop:10
  },
  btnEntrar:{
    marginTop:25,
    textAlign:'center',
     padding:10
  }
})
