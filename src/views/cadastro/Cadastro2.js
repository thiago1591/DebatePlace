import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Botao from '../../components/Botao';
import styleGeral from '../../components/estilo'


export default props => {
    return (
        <ScrollView style={style.container}>
            <Text style={{ fontSize: 17 }}>Caso se identifique em algum espectro político, escreva  abaixo
              <Text style={{ color: 'gray' }}> (opcional):</Text>
            </Text>

            <TextInput style={styleGeral.input}/>
            
            <Text style={{ textAlign: 'center', marginTop: 5 }}>está em dúvida?
              <Text style={{ color: '#0000EE' }}>faça o teste</Text>
            </Text>

            <View style={{ marginTop: 30 }}>
                <Text style={{ fontSize: 17 }}>Escreva um pequeno texto que resuma a suas ideias e visão de mundo</Text>

                <TouchableOpacity style={style.btnExemplos}>
                    <Text>Exemplos</Text>
                </TouchableOpacity>

                <TextInput
                    style={style.textArea}
                    multiline={true}
                    numberOfLines={8}
                    maxLength={690} />

                <Botao nome="Continuar" avancar="Cadastro3" />
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 25,
        flex:1,
        backgroundColor:'#FFF'
    },
    btnExemplos: {
        borderWidth: 1,
        borderRadius: 20,
        alignSelf: 'flex-end',
        padding: 5
    },
    textArea: {
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 10
    }
})
