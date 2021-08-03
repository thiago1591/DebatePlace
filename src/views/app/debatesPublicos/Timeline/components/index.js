import React, { useState, useEffect } from 'react';
import { Card } from 'react-native-paper';

import LinhaRespostas from '../../../../../components/LinhaRespostas'
import OpniaoAutor from '../../../../../components/DebatesPublicos/opniaoAutor'
import Respostas from '../../../../../components/DebatesPublicos/resposta'

import EvilIcon from 'react-native-vector-icons/EvilIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

import { useNavigation } from '@react-navigation/native';

import { 
  Container, 
  ActionContainer, 
  Button, 
  TxtButton, 
  InfosContainer, 
  InfoContainer, 
  TextInfo 
  } from './styles';

const DebatesTimeline = ({debate}) => {
  const [isLoad, setIsLoad] = useState(false)

  useEffect(() => {
    if (Object.keys(debate).length !== 0) {
      setIsLoad(true)
    }
  }, [debate])

  const navigation = useNavigation();
  return <Container>
    <Card onPress={() => { navigation.navigate('PaginaDebate') }} style={{ paddingHorizontal: 10, paddingTop: 10 }}>

      <OpniaoAutor debate={debate} />

      <ShimmerPlaceHolder
        shimmerStyle={{ width: '100%', height: 10, marginBottom: 25 }}
        LinearGradient={LinearGradient}
        autoRun={true}
        visible={isLoad}>

        <LinhaRespostas />

        <Respostas debate={debate} />

        <InfosContainer>
          <InfoContainer>
            <FontAwesomeIcon style={{ marginTop: 2 }} name="flag" size={17} color="green" />
            <TextInfo>10</TextInfo>
          </InfoContainer>

          <InfoContainer>
            <EvilIcon name="comment" size={23} color="gray" />
            <TextInfo>10</TextInfo>
          </InfoContainer>
        </InfosContainer>

        <ActionContainer>
          <Button>
            <IonIcon style={{ marginTop: 2 }} name="md-flag" size={17} color="green" />
            <TxtButton margin={4}>Seguir Debate</TxtButton>
          </Button>
          <Button>
            <EvilIcon name="comment" size={25} color="gray" />
            <TxtButton margin={2}>Responder</TxtButton>
          </Button>

        </ActionContainer>
      </ShimmerPlaceHolder>
    </Card>


  </Container>
}

export default DebatesTimeline;