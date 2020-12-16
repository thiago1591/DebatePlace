import React from 'react';
import { Text, ImageBackground, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header' 
import Botao from '../components/Botao'


export default props => {
    return <ImageBackground
        source={require('../../assets/background-welcome.png')}
        style={{ width: '100%', height: '100%' }}>

        <View style={style.container}>

            <View  style={{padding:15}}>
            <Header  mb={60} />
            </View>
            
            <View style={{ paddingHorizontal: '10%',marginBottom:'20%',flex:1 }}>
                <View style={style.conteudo}>
                    <Text style={style.txt}>
                        Esse aplicativo possui como objetivo conectar pessoas
                        e criar debates com diferentes ideais e opniões, tendo
                    como foco política e economia</Text>
                    <Text style={style.txt}>
                        É proibido ofensas e ataques pessoais </Text>
                </View>
            </View>

            <View style={{ paddingHorizontal: '10%',paddingBottom:'10%' }}>
                <Botao avancar = "Login" nome ="Entendi" />
            </View>


        </View>

    </ImageBackground>;
}

const style = StyleSheet.create({
    container: {
        width: '85%',
        alignSelf: 'center',
        height: '85%',
        backgroundColor: '#FFF'
    },
    conteudo: {
        borderTopWidth: 1,
        borderTopColor: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 1,

    },
    txt: {
        marginTop: '5%',
        marginBottom: '5%',
        fontSize: 16,
        fontFamily: 'sans-serif',
        color:'gray'
    },
})