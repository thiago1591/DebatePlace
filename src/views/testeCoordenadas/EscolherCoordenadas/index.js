import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { Picker } from '@react-native-picker/picker';

import { useNavigation } from '@react-navigation/native';

import { 
    Container, 
    Title, 
    TxtTopics, 
    CoordenadasImage, 
    Button, 
    TxtButton, 
    EscolhaContainer, 
    Button2, 
    TxtButton2, 
    ButtonContainer } from './styles';


const EscolherCoordendas = () => {
    const [coordenadaX, setCoordenadaX] = useState('java')
    const navigation = useNavigation();

    return (
        <Container>
            <Title>Escolher Coordenadas</Title>
            <Button onPress={() => { navigation.navigate('ExplicacaoEixos') }}>
                <TxtButton>Em dúvida sobre os eixos? </TxtButton>
            </Button>
            <CoordenadasImage resizeMode="contain" source={require('../../../../assets/coordenadas.jpg')} />

            <TxtTopics>Escolha abaixo suas coordenadas:</TxtTopics>
            <EscolhaContainer>

                <View>
                    <Text style={{ textAlign: 'center' }}>Eixo X</Text>
                    <Picker
                        selectedValue={coordenadaX}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue) =>
                        setCoordenadaX(itemValue)}
                        >
                        <Picker.Item label="0" value="0" />
                    </Picker>
                </View>

                <View>
                    <Text style={{ textAlign: 'center' }}>Eixo Y</Text>
                    <Picker
                        selectedValue={coordenadaX}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) =>
                            setCoordenadaX(itemValue)
                        }>
                        <Picker.Item label="0" value="0" />
                    </Picker>
                </View>
            </EscolhaContainer>

            <ButtonContainer>
                <Button2 onPress={() => { navigation.navigate('EditarPerfil') }}>
                    <TxtButton2>Continuar</TxtButton2>
                </Button2>
            </ButtonContainer>
            
        </Container>
    )
}

export default EscolherCoordendas;