import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ComponenteDebate from '../../components/ComponenteDebatesPublicos'
import UserAvatar from "@muhzi/react-native-user-avatar";


export default props => {
  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <UserAvatar
            size={35}
            backgroundColor="#0be881"
            src="https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg"
          />
          <Text style={styles.inicioTxt}>TIMELINE</Text>
        </View>
      </View>
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
  header: {
    paddingVertical:10,
    backgroundColor: '#6B84C5',
    marginBottom: 5,
    paddingLeft:10
  },
  headerInner: {
    flexDirection: 'row',
    width: '35%',
    
  },
  inicioTxt: {
    alignSelf: 'center',
    fontSize: 16,
    marginLeft: 10,
    color:'white'
  },
  txt: {
    fontSize: 25
  }
})
