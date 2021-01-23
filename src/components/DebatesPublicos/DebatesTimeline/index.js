import React from 'react';
import { Text, View } from 'react-native'
import { Card } from 'react-native-paper';
import LinhaRespostas from '../../LinhaRespostas'
import { Container, ActionContainer, Button, TxtButton, InfosContainer, InfoContainer, TextInfo } from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import OpniaoAutor from '../Opniao/opniaoAutor'
import Respostas from '../Opniao/resposta'
import { useNavigation } from '@react-navigation/native';

const DebatesTimeline = () => {
  const navigation = useNavigation();
  return <Container>
    <Card onPress={()=>{navigation.navigate('PaginaDebate')}} style={{ paddingHorizontal: 10, paddingTop: 10 }}>

      <OpniaoAutor />

      <LinhaRespostas />

      <Respostas />

      <InfosContainer>
        <InfoContainer>
          <FontAwesome style={{ marginTop: 2 }} name="flag" size={17} color="green" />
          <TextInfo>10</TextInfo>
        </InfoContainer>

        <InfoContainer>
          <EvilIcons name="comment" size={23} color="gray" />
          <TextInfo>10</TextInfo>
        </InfoContainer>
      </InfosContainer>

      <ActionContainer>
        <Button>
          <Ionicons style={{ marginTop: 2 }} name="md-flag" size={17} color="green" />
          <TxtButton margin={4}>Seguir Debate</TxtButton>
        </Button>
        <Button>
          <EvilIcons name="comment" size={25} color="gray" />
          <TxtButton margin={2}>Responder</TxtButton>
        </Button>

      </ActionContainer>
    </Card>


  </Container>
}

export default DebatesTimeline;