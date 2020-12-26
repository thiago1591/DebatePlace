import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ComponenteDebate from '../../components/ComponenteDebatesPublicos'

import Header from '../../components/Header2'

export default props => {
  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        <ComponenteDebate />
        <ComponenteDebate />
        <ComponenteDebate />
        <ComponenteDebate />
        <ComponenteDebate />
      </View>

    </ScrollView>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8
  },
  txt: {
    fontSize: 25
  }
})
