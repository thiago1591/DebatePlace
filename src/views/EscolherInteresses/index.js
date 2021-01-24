import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Button } from 'react-native';
import Interesse from './component';
import { useNavigation } from '@react-navigation/native';
import BtnPrincipal from '../../components/BtnPrincipal'


const Interesses = () => {
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            <Text style={style.titulo}>Escolha os 4 temas que mais te interessam
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
              
            </View>
            <BtnPrincipal title="Continuar" navegar="EditarPerfil" />
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

export default Interesses;