import React from 'react';
import {Text} from 'react-native'
import {Card} from 'react-native-paper'

import Respostas from '../../../../../components/DebatesPublicos/resposta'

import { Container,TitleContainer,Title,Input } from './styles';

const PaginaDebate = () => {
    
  return (
    <Container>
      <TitleContainer>
        <Text style={{fontSize:15}}>Discussão:</Text>
        <Title></Title>
      </TitleContainer>

      <Card style={{padding:10}}>
        <Respostas></Respostas>
      </Card>

      <Input placeholder="Escreva uma resposta para Aristóteles" multiline={true}/>
    </Container>
    ) 
}

export default PaginaDebate;