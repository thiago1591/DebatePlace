import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Button } from 'react-native';
import Row from '../../components/RowCadastro3';
import styleGeral from '../../components/estilo'
import { useNavigation } from '@react-navigation/native';
import Botao from '../../components/Botao'

export default props => {
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            <Text style={style.titulo}>Escolha alguns temas do
            seu interesse
            </Text>

            <View style={{flex:1}}>
                <Row topico1="liberação das drogas" topico2="porte de armas" />
                <Row topico1="aborto" topico2="educação sexual" />
                <Row topico1="porte de armas" topico2="privatizações" />
                <Row topico1="taxação dos mais ricos" topico2="protecionismo" />
                <Row topico1="taxação dos mais ricos" topico2="protecionismo" />
                <Row topico1="taxação dos mais ricos" topico2="protecionismo" />
                <Row topico1="taxação dos mais ricos" topico2="protecionismo" />
                <Row topico1="taxação dos mais ricos" topico2="protecionismo" />

                <TextInput style={style.input} placeholder="outro? digite aqui" />
                <TouchableOpacity
                    style={style.btnPlus}>
                    <Text style={{color:'#FFF'}}>+</Text>
                </TouchableOpacity>
            </View>
            {/* <Botao nome="Finalizar" avancar="BottomTab" />  */}
            <Button title="teste" 
            onPress={() => {
                navigation.navigate("AppStack")
            }} />
        </View>)
}

const style = StyleSheet.create({
    titulo: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 20,
        marginTop: 10
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15
    },
    btnPlus: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 15,
        marginTop:15,
        backgroundColor:'#9387DF'
    },
    input:{
        borderBottomWidth: 1, 
         borderBottomColor: "gray", 
         width: '45%'
    }
})
