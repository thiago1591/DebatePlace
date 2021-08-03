import React from 'react';

import OpniaoAutor from '../../../../components/DebatesPublicos/opniaoAutor'
import Respostas from './components/respostas'

import { useNavigation } from '@react-navigation/native';

import { 
  Container, 
  CardComponent, 
  Answer, 
  AnswerTxt, 
  TopicTxt} from './styles';

const PaginaDebate = () => {
  const navigation = useNavigation();
  return (
      <Container>
          <CardComponent>
            <OpniaoAutor />
          </CardComponent>

          <Answer onPress={()=>{navigation.navigate('Responder')}}>
            <AnswerTxt>Adicionar uma resposta</AnswerTxt>
          </Answer>

          <TopicTxt>Respostas:</TopicTxt>
          <Respostas />
          <Respostas />
          <Respostas />
          <Respostas />
          <Respostas />
          <Respostas />
          <Respostas />
      </Container>
  )
}

export default PaginaDebate;