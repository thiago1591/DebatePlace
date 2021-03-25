import React from 'react';
import { View,Text } from 'react-native';

import { InteressesContainer,InteresseItem } from './styles';

const InteressesList = () => {
  return (
    <InteressesContainer>
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap' }}>
     
      <InteresseItem>lorem ipsum</InteresseItem>
      <InteresseItem>is a dummy text</InteresseItem>
      <InteresseItem>lorem ipsum</InteresseItem>
      <InteresseItem>is a dummy text</InteresseItem>
      
      
      
    </View>
  </InteressesContainer>
  )
}

export default InteressesList;