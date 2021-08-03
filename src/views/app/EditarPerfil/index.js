import React, { useState } from 'react';
import { ScrollView, TouchableOpacity} from 'react-native';

import BtnPerfil from '../../../components/BtnPerfil'

import Feather from 'react-native-vector-icons/dist/Feather';

import { useNavigation } from '@react-navigation/native';

import { 
    Container, 
    Header, 
    TxtHeader, 
    Label, 
    Input, 
    TxtButton, 
    Capa, 
    UserImage, 
    VisaoContainer, 
    BtnExemplos, 
    TxtBtnInteresses, 
    InteresseContainer, 
    CoordenadasImage, 
    ButtonsContainer, 
    Button
    } from './styles';

const AddDebateTxt = () => {
    const navigation = useNavigation();

    return <>
        <Header>
            <TouchableOpacity onPress={()=>{navigation.navigate('BottomTabStack')}}>
            <TxtHeader>Avançar</TxtHeader>
            </TouchableOpacity>
        </Header>

        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Label>Escolha uma capa e imagem de perfil (opcional)</Label>
                <Capa>
                    <Feather name="camera" size={24} color="#15B6D6" />
                </Capa>

                <UserImage source={require('../../../../assets/users/bill.jpg')} />

                <VisaoContainer>
                    <Label>Escreva um pequeno texto que resuma suas ideias e visão de mundo</Label>
                    <BtnExemplos>
                        <TxtBtnInteresses>Exemplos</TxtBtnInteresses>
                    </BtnExemplos>
                    <Input
                        style={{ textAlignVertical: 'top' }}
                        multiline
                    />
                </VisaoContainer>

                <InteresseContainer>
                    <Label>Seus temas de interesse:</Label>
                    <Button onPress={() => { navigation.navigate("EscolherInteresses") }}>
                        <TxtButton>Escolher </TxtButton>
                    </Button>
                </InteresseContainer>
                
                <Label>Coordenadas Políticas (opcional)</Label>
                <CoordenadasImage resizeMode="contain" source={require('../../../../assets/coordenadas.jpg')} />
                <ButtonsContainer>
                    <BtnPerfil title="Fazer teste" navegar="PaginaTeste" />

                    <BtnPerfil title="Escolher Coordendas" navegar="BottomTab" />
                </ButtonsContainer>

            </ScrollView>

        </Container>
    </>
}

export default AddDebateTxt;