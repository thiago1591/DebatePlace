import React from 'react';
import { View,Text } from 'react-native';

import { InteressesContainer,InteresseItem } from './styles';

const InteressesList = () => {
  return (
    <InteressesContainer>
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap' }}>
     
      <InteresseItem>Armamentoaloremadas</InteresseItem>
      <InteresseItem>Liberação das drogas</InteresseItem>
      <InteresseItem>aborto lorem ipsum</InteresseItem>
      <InteresseItem>qualquer coisa de tema</InteresseItem>
      
      
      
    </View>
  </InteressesContainer>
  )
}

export default InteressesList;