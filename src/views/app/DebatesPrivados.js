import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/Header2'
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import UserAvatar from "@muhzi/react-native-user-avatar";

export default props => {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <View style={styles.container}>

        <Card style={styles.cardContainer}>
          <Image style={{ alignSelf: 'center', marginTop: 5}} source={require('../../../assets/foto-default.png')} />
          <Text style={[styles.txt, { fontSize: 18 }]}>Thiago André</Text>
          <Text style={[styles.txt, { fontSize: 15 }]}>Na minha opnião o livre mercado, atraves de seus incentivos pragmaticos é capaz de atender as demandas e consequentementes suprir as necessidades da população por meio do incentivo do lucro</Text>
          <View style={styles.interessesContainer}>
            <Text style={{fontSize:16}}>Temas de interesse:</Text>
           <View style={{flexDirection:'row',alignItems: 'flex-start',flexWrap: 'wrap'}}>
           <Text style={styles.interesseItem}>Liberação das drogas</Text>
            <Text style={styles.interesseItem}>Aborto</Text>
            <Text  style={styles.interesseItem}>Armamento</Text>
            <Text  style={styles.interesseItem}>Armamento</Text>
            <Text  style={styles.interesseItem}>Armamento</Text>
           </View>
          </View>
          <Image style={{width:180,height:180,alignSelf:'center',marginTop:10,resizeMode: 'contain',}}  source={require('../../../assets/coordenadas.jpg')} />
        </Card>    

      </View>
      <View style={styles.containerBotaos}>
          <TouchableOpacity style={styles.botao}>
            
          <Text style={{ textAlign: 'center', color: 'white' }}>Pular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao}>
            <Text style={{ textAlign: 'center', color: 'white' }}>Debater</Text>
          </TouchableOpacity>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  borda: {
    borderWidth: 1,
    borderColor: 'red',
  },
  txt: {
    alignSelf: 'center',
    marginTop: 15,
  },
  cardContainer: {
    marginTop: 20,
    alignItems: 'center',
    padding: 15
  },
  containerBotaos: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    marginBottom:30
  },
  botao: {
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#6B84C5',
    flex: 1,
    paddingVertical: 10,
    borderRadius: 4
  },
  interessesContainer:{
    marginTop:15
  },
  interesseItem:{
    borderRadius:10,
    backgroundColor:'#6B84C5',
    paddingHorizontal:5,
    paddingVertical:3,
    marginLeft:10,
    marginTop:10,
    color:'white'
  }
})
