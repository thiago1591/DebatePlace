import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ComponenteDebate from '../../../../components/ComponenteDebatesPublicos'

import Header from '../../../../components/Header2'

import { Container } from './styles';

const Timeline = () => {
  return (
    <ScrollView>
    <Header />
    <Container>
      <ComponenteDebate />
      <ComponenteDebate />
      <ComponenteDebate />
      <ComponenteDebate />
      <ComponenteDebate />
    </Container>

  </ScrollView>
  )
}

export default Timeline;