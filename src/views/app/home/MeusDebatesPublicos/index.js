import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import {View} from 'react-native'
import ChatListItem from '../../../../components/Home/DebatePublicoItem'

import api from '../../../../services/api'

const MeusDebatesPublicos = () => {
  const [debatesSeguidos, setDebatesSeguidos] = useState([1])

  useEffect(() => {
    async function getData() {
      await api.get('debates_seguidos/3').then(response => {
        setDebatesSeguidos(response.data)
      })
    }
    getData()
  }, [])

  return (
    <Container>
    {debatesSeguidos.map((debate,key)=>{
      return(
      <View key={key}>
        <ChatListItem debate={debate} />
      </View>
      )
    })}
 </Container>
  )
}

export default MeusDebatesPublicos;