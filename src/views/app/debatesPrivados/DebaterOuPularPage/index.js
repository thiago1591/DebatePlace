import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import {Button, ButtonContainer, TxtButton, BackButton } from './styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from '../../../../components/Header'
import Swiper from './Swiper'
import Icon from 'react-native-vector-icons/FontAwesome'
import Cardcomponent from './CardComponent'

import api from '../../../../services/api'

const DebaterOuPularPage = () => {
  const [debates, setDebates] = useState([])

  useEffect(() => {
    async function getData() {
      await api.get('debates_publicos').then(response => {
        setDebates(response.data)
        console.log(debates)
      })
    }
    getData()
  }, [])

  if (debates.length === 0) {
    return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:25}}>Carregando...</Text>
    </View>
    )
  } 
  else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
  
        <Header title="Debates Privados" />
  
 
        <Swiper
          cards={debates}
          backgroundColor={'transparent'}
          renderCard={card =>
          (<Cardcomponent card= {card} />)}
          infinite
          cardVerticalMargin={0}
          stackSize={2}
          stackScale={0}
          stackSeparation={0}
        />
 
  
          <ButtonContainer>
            <Button>
              <TxtButton>Pular</TxtButton>
            </Button>
            <BackButton>
              <Icon name="undo" size={30} color="gray" />
            </BackButton>
            <Button>
              <TxtButton>Debater</TxtButton>
            </Button>
          </ButtonContainer>  
      </SafeAreaView>
    )
  }
}


export default DebaterOuPularPage;