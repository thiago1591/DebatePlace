import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/Header'
import Botao from '../../components/Botao'

import { ImageBackground, Container, Conteudo, Text, ButtonView } from './styles';

const Avisos = () => {
    return (
        <ImageBackground
            source={require('../../../assets/background-welcome.png')}>

            <Container>

                <Header mb={60} />

                <Conteudo>
                    <Text>Esse aplicativo possui como objetivo conectar pessoas
                    e criar debates com diferentes ideais e opniões, tendo
                    como foco política e economia
                    </Text>
                    <Text>É proibido ofensas e ataques pessoais</Text>
                </Conteudo>

                <ButtonView>
                    <Botao avancar="Login" nome="Entendi" />
                </ButtonView>

            </Container>

        </ImageBackground>)
}

export default Avisos;