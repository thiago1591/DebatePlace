import React, { useEffect } from 'react';
import { View} from 'react-native'
import Header from '../../../../components/Header'
import { useNavigation } from '@react-navigation/native';
import { Container, ButtonContainer, Button, TxtButton, BackButton} from './styles';
import Swiper from 'react-native-deck-swiper';
import { showMessage, hideMessage } from "react-native-flash-message";
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from './Card'

const DebaterOuPularPage = (route) => {

  if(typeof(route.route.params) !== 'undefined' || route.route.params != null){
    
      showMessage({
        message: "Solicitação de debate enviada para Thiago!",
        type: "info",
      })
  }

  const navigation = useNavigation();
  return (
    <>
      <View>
        <Header title="Debates Privados" />
      </View>
      <Container style={{ flex: 1,marginTop:5}}>
        <Card />
      </Container>

      <ButtonContainer>

      <Button  onPress={() => {
          
        }}>
          <TxtButton>Pular</TxtButton>
        </Button>

        <BackButton>
        <Icon name="undo" size={30} color="gray" />
        </BackButton>
        <Button onPress={() => { navigation.navigate('EscolherTemaDebate') }}>
          <TxtButton>Debater</TxtButton>
        </Button>
      </ButtonContainer>

    </>
  )
}

export default DebaterOuPularPage;