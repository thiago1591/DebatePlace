import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ComponenteDebate from '../../../../components/DebatesTimeline'
import ComponenteDebate2 from '../../../../components/ComponenteDebatesPublicos2'
import { useNavigation } from '@react-navigation/native';
import Header from '../../../../components/Header2'

import { Container,BtnAdd,TxtBtn } from './styles';

const Timeline = () => {
  const navigation = useNavigation();
  return ( <>
    <ScrollView>
    <Header title="Debates Públicos" />
    <Container>
      <ComponenteDebate />
      <ComponenteDebate />
      <ComponenteDebate2 />
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