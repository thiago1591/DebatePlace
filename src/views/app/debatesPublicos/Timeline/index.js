import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ComponenteDebate from './components';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../../components/Header'

import { Container,BtnAdd,TxtBtn } from './styles';

const Timeline = () => {
  const navigation = useNavigation();
  return ( <>
    <ScrollView>
    <Header title="Debates Públicos" />
    <Container>
      <ComponenteDebate />
      <ComponenteDebate />
      <ComponenteDebate />
    </Container>

  </ScrollView>
  <BtnAdd onPress={()=>{navigation.navigate('AddNovoDebate')}}>
  <TxtBtn>+</TxtBtn>
  </BtnAdd>
</>
  )
}

export default Timeline;