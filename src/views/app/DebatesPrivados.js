import React from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import Header from '../../components/Header2'
import { Card} from 'react-native-paper';

export default props => {
  return (
    <View style={styles.container}>
          <Header />
          <Card style={styles.cardContainer}>
            <Image style={{alignSelf:'center'}} source={require('../../../assets/foto-default.png')} />
              <Text style={{alignSelf:'center'}}>Ideologia: Liberalismo</Text>
              <Text style={{alignSelf:'center'}}>Na minha opnião o livre mercado, atraves de seus incentivos pragmaticos é capaz de atender as demandas e consequentementes suprir as necessidades da população por meio do incentivo do lucro</Text>

              <View style={{flexDirection:'row'}}>
                  <TouchableOpacity>
                    <Text>Pular</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text>Debater</Text>
                  </TouchableOpacity>
              </View>
          </Card>
    </View>)
}

const styles = StyleSheet.create({
  container:{
  },
  borda:{
    borderWidth:1,
    borderColor:'red',
    
  },
  txt:{
    fontSize:25
  },
  cardContainer:{
    marginHorizontal:30,
    marginTop:20,
    alignItems:'center',
    padding:15
  }
})
