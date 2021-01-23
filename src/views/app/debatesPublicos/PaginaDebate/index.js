import React from 'react';
import { View, Text } from 'react-native';
import OpniaoAutor from '../../../../components/DebatesPublicos/Opniao/opniaoAutor'
import Respostas from './components/respostas'
import { useNavigation } from '@react-navigation/native';

import { Container, CardComponent, Responder, TxtResponder, TxtTopic} from './styles';

const PaginaDebate = () => {
  const navigation = useNavigation();
  return <Container>
    <CardComponent>
      <OpniaoAutor />
    </CardComponent>

    <Responder onPress={()=>{navigation.navigate('Responder')}}>
      <TxtResponder>Adicionar uma resposta</TxtResponder>
    </Responder>

    <TxtTopic>Respostas:</TxtTopic>
    <Respostas />
    <Respostas />
    <Respostas />
    <Respostas />
    <Respostas />
    <Respostas />
    <Respostas />

  </Container>
}

export default PaginaDebate;