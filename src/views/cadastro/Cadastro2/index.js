import React, { useState } from 'react';
import { ScrollView,Text } from 'react-native';
import { Container, Title, Input, Button, TxtButton, BtnExemplo } from './styles';
import { useNavigation } from '@react-navigation/native';

const AddDebateTxt = () => {
  const navigation = useNavigation();
  return <Container>
    <ScrollView>
      
      <Title>Escreva um pequeno texto que resuma suas ideais e visão de mundo</Title>

      <BtnExemplo>
        <Text style={{color:'gray'}}>Exemplos</Text>
      </BtnExemplo>

      <Input
        style={{ height: 150, textAlignVertical: 'top' }}
        multiline
      />

    </ScrollView>

    <Button onPress={() => { navigation.navigate('PaginaInstrucoes') }}>
      <TxtButton>Avançar</TxtButton>
    </Button>
  </Container>




}



export default AddDebateTxt;