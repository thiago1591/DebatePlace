import React from 'react';
import { View,Text,StyleSheet,FlatList} from 'react-native';
import MeusDebatesCriados from '../../../components/DebatesCriadosItem'

export default props => {
    const array = [1,2,3,4,5,6,7,8,9,10]
  return <View style={{padding:5}}>
            <FlatList
       showsVerticalScrollIndicator={false}
        data={array}
        renderItem={() => <MeusDebatesCriados />}
        keyExtractor={(index) => index.toString()}
        />
       </View>
}

