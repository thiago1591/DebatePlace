import React from 'react';
import { View,Text } from 'react-native';

import Respostas from '../../../../../components/DebatesPublicos/resposta'

import Icon from 'react-native-vector-icons/AntDesign';

import {useNavigation} from '@react-navigation/native'

import { 
  CardComponent,
  InfoContainer,
  TxtRespostaNumero 
} from '../styles';

const PaginaDebate = () => {
  const navigation = useNavigation();
  return (
  <CardComponent onPress={()=>{navigation.navigate('RespostasDeUmaResposta')}}>
    <Respostas />

    <InfoContainer>
      <View style={{flex: 1, flexDirection: 'row' }}>
        <Icon name="like2" size={18} />
        <Text>10</Text>
      </View>

      <View style={{flex: 1}}>
        <TxtRespostaNumero>10 respostas</TxtRespostaNumero>
      </View>

      <View style={{flex: 1}}>
      </View>
    </InfoContainer>
  </CardComponent>
  )
}

export default PaginaDebate;