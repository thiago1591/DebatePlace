import React, { useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import ComponenteDebate from './components';
import { useNavigation,useFocusEffect } from '@react-navigation/native';
import Header from '../../../../components/Header'
import { Container, BtnAdd, TxtBtn } from './styles';

import api from '../../../../services/api'

const Timeline = () => {
  const [debates,setDebates] = useState([0,0,0,0])

  useFocusEffect(() => {
      async function getData() {
        await api.get('debates_publicos').then(response => {
          setDebates(response.data)
        }).catch(error => console.log(error));
      }
      getData()
    })

  const navigation = useNavigation();

  return (<>
    <ScrollView>
      <Container>
        {debates.map((debate,key) => {
          return (
            <View key={key}>   
                <ComponenteDebate debate={debate} />
            </View>
          )
        })}
      </Container>

    </ScrollView>
    <BtnAdd onPress={() => { navigation.navigate('AddNovoDebate') }}>
      <TxtBtn>+</TxtBtn>
    </BtnAdd>
  </>
  )
}



export default Timeline;