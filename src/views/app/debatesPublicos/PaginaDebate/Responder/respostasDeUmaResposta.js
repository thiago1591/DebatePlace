import React from 'react';
import { View} from 'react-native';
import {Card} from 'react-native-paper'

import Respostas from '../../../../../components/DebatesPublicos/resposta'

import { useNavigation } from '@react-navigation/native';

import {TxtResponder,Responder} from '../styles'

const PaginaDebate = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Card style={{padding:10}}>
        <Respostas />
      </Card>

      <Responder onPress={()=>{navigation.navigate('ResponderResposta')}}>
        <TxtResponder>Escreva uma resposta</TxtResponder>
      </Responder>

      <Card style={{padding:10}}>
        <Respostas></Respostas>
      </Card>

      <Card style={{padding:10,borderTopColor:'#d3e2e6',borderTopWidth:1}}>
        <Respostas></Respostas>
      </Card>
    </View>
  )
}

export default PaginaDebate;