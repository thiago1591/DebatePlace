import React, { useState, useEffect } from 'react';
import {View, SafeAreaView} from 'react-native';
import { Button, ButtonContainer, TxtButton, BackButton } from './styles';
import { Card } from 'react-native-paper';
import Header from '../../../../components/Header'
import Swiper from './Swiper'
import Icon from 'react-native-vector-icons/FontAwesome'
import Cardcomponent from './CardComponent'
import Spinner from 'react-native-spinkit'

import api from '../../../../services/api'

const DebaterOuPularPage = () => {
  const [isLoad, setIsLoad] = useState(false)
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    async function getData() {
      await api.get('usuarios').then(response => {
        setUsuarios(response.data)
      })
    }
    getData()
  }, [])

  useEffect(() => {
    if (usuarios.length !== 0) {
      setIsLoad(true)
    }
  }, [usuarios])

  if(isLoad == false){
    return (
    <Card style={{ paddingHorizontal: 20, flex: 1 }}>
      <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
          <Spinner type="Bounce" size={55}  />
      </View>
    </Card>
    )
  } else{

    return (
      <SafeAreaView style={{ flex: 1 }}>

        <Swiper
          cards={usuarios}
          backgroundColor={'transparent'}
          renderCard={user =>
            (<Cardcomponent user={user} />)}
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