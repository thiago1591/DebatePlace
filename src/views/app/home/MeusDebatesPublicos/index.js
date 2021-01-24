import React from 'react';
import { Container } from './styles';
import {FlatList} from 'react-native'
import ChatListItem from '../../../../components/Home/DebatePublicoItem'

const MeusDebatesPublicos = () => {
  const array = [1,2,3,4,5,6,7,8,9,10]
  return (
    <Container>
    <FlatList
    showsVerticalScrollIndicator={false}
     data={array}
     renderItem={() => <ChatListItem />}
     keyExtractor={(index) => index.toString()}
     />
 </Container>
  )
}

export default MeusDebatesPublicos;