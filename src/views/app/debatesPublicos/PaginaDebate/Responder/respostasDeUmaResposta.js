import React from 'react';
import { View,TextInput } from 'react-native';
import {Card} from 'react-native-paper'
import {TxtResponder,Responder} from '../styles'
import Respostas from '../../../../../components/DebatesPublicos/Opniao/resposta'
import { useNavigation } from '@react-navigation/native';

const PaginaDebate = () => {
  const navigation = useNavigation();
  return <View>
    <Card style={{padding:10}}>
    <Respostas></Respostas>
    </Card>
    <Responder onPress={()=>{navigation.navigate('ResponderResposta')}}>
    <TxtResponder>Escreva uma resposta</TxtResponder>
    </Responder>
    <Card style={{padding:10}}>
    <Respostas></Respostas>
    </Card>
    <Card style={{padding:10,borderTopColor:'#d3e2e6',borderTopWidth:1}}>
    <Respostas></Respostas>
    </Card>
    
    
  </View>
}

export default PaginaDebate;