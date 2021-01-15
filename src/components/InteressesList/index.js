import React from 'react';
import { View,Text } from 'react-native';

import { InteressesContainer,InteresseItem } from './styles';

const InteressesList = () => {
  return (
    <InteressesContainer>
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap' }}>
     
      <InteresseItem>Liberalismo</InteresseItem>
      <InteresseItem>Liberalismo</InteresseItem>
      <InteresseItem>Liberalismo</InteresseItem>
      <InteresseItem>Liberalismo</InteresseItem>
      <InteresseItem>Liberalismo</InteresseItem>
      <InteresseItem>Liberalismo</InteresseItem>
      <InteresseItem>Liberalismo</InteresseItem>
      <InteresseItem>Liberalismo</InteresseItem>
      <InteresseItem>Liberalismo</InteresseItem>
      <InteresseItem>Liberalismo</InteresseItem>
      <InteresseItem>Liberalismo</InteresseItem>
    
      
      
    </View>
  </InteressesContainer>
  )
}

export default InteressesList;