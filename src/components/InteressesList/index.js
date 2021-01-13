import React from 'react';
import { View,Text } from 'react-native';

import { InteressesContainer,InteresseItem } from './styles';

const InteressesList = () => {
  return (
    <InteressesContainer>
    <Text FontSize={16}>Temas de interesse:</Text>
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <InteresseItem>Liberação das drogas</InteresseItem>
      <InteresseItem>Aborto</InteresseItem>
      <InteresseItem>Armamento</InteresseItem>
      <InteresseItem>Liberalismo</InteresseItem>
      <InteresseItem>Imigração</InteresseItem>
    </View>
  </InteressesContainer>
  )
}

export default InteressesList;