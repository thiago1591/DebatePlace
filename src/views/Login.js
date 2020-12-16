import React from 'react';
import { Text, ImageBackground, StyleSheet, View, TouchableOpacity, ScrollView, Dimensions,TextInput } from 'react-native';
import Header from '../components/Header'
import Botao from '../components/Botao'


export default props => {
    return <ImageBackground
        source={require('../../assets/background-welcome.png')}
        style={{ width: '100%', height: '100%' }}>

        <View style={style.container}>

            <ScrollView>
                <Header mb={50}></Header>

                <View style={{ flex: 1 }}>
                    <TextInput
                        placeholder="E-mail"
                        autoCompleteType="email"
                        style={{ borderColor: 'gray', borderBottomWidth: 1 }}>
                    </TextInput>

                    <TextInput
                        placeholder="Senha"
                        secureTextEntry={true}
                        style={{ borderColor: 'gray', borderBottomWidth: 1 }}>
                    </TextInput>

                    <TouchableOpacity
                        style={style.botaoEntrar}
                        >
                        <Text style={{ color: '#FFF' }}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}}>
                        <View style={{ padding: 10 }}>
                            <Text style={{ textAlign: 'center' }}>esqueceu sua senha?</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={style.cadastroView}>
                    <Text style={style.textoCadastro}>
                        ainda não possui cadastro?
                    </Text>
                    <Botao nome="Cadastrar" avancar="Cadastro1"></Botao>
                </View>
            </ScrollView>


        </View>

    </ImageBackground>;
}
const { height } = Dimensions.get('window') * 0.85
const style = StyleSheet.create({
    container: {
        width: '85%',
        alignSelf: 'center',
        height: height,
        backgroundColor: '#FFF',
        padding: 15
    },
    esqueceuSenha: {
        textAlign: 'center',
        marginTop: 5,
    },
    botaoEntrar: {
        marginTop: '10%',
        alignItems: "center",
        backgroundColor: "#C4C4C4",
        padding: 15
    },
    cadastroView: {
        borderTopWidth: 1,
        borderTopColor: '#C1B0B0',
        marginTop: '40%',
        
    },
    textoCadastro: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 15
    }
})
