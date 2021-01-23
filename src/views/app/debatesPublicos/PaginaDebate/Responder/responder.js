import React from 'react';
import {Text} from 'react-native'
import { Container,TitleContainer,Title,Input } from './styles';

const PaginaDebate = () => {
  return <Container>
      
      <TitleContainer>
      <Text style={{fontSize:15}}>Debate:</Text>
          <Title>Liberalismo é realmente o unico sistema bom?</Title>
      </TitleContainer>

      <Input placeholder="Escreva uma resposta" multiline={true}/>
  </Container>
}

export default PaginaDebate;