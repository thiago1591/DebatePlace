import React from 'react';
import { View, Text } from 'react-native';

import { Container, Title, TxtTopics, CoordenadasImage, TxtDuvida, ButtonsContainer, Button, TxtButton,EscolhaContainer } from './styles';

const EscolherCoordendas = () => {
    return <Container>
        <Title>Escolher Coordenadas</Title>
        <Button>
            <TxtButton>Em dúvida sobre os eixos? </TxtButton>
        </Button>
        <CoordenadasImage resizeMode="contain" source={require('../../../../assets/coordenadas.jpg')} />
        
        <TxtTopics>Escolha abaixo suas coordenadas:</TxtTopics>
        <EscolhaContainer>
            <Text>teste</Text>
            <Text>teste</Text>
        </EscolhaContainer>


    </Container>
}

export default EscolherCoordendas;