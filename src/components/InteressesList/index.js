import React from 'react';
import { View,Text } from 'react-native';

import { InteressesContainer,InteresseItem } from './styles';

const InteressesList = () => {
  return (
    <InteressesContainer>
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap' }}>
     
      <InteresseItem>Direitos Sociais</InteresseItem>
      <InteresseItem>Liberação das drogas</InteresseItem>
      <InteresseItem>Aborto</InteresseItem>
      <InteresseItem>Falhas de mercado</InteresseItem>
      
      
      
    </View>
  </InteressesContainer>
  )
}

export default InteressesList;