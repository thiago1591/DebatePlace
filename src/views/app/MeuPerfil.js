import React from 'react';
import { View, Text } from 'react-native';
import UserAvatar from "@muhzi/react-native-user-avatar";
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { Button } from 'react-native-elements';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const capaHeight = 30 * Dimensions.get('window').height / 100

export default props => {
  const navigation = useNavigation();
  return <ScrollView style={styles.containerScroll}>
    <ImageBackground
      source={require('../../../assets/math.jpg')}
      style={styles.capa}>
      <TouchableOpacity style={styles.btnVoltar}>
        <Icons name={'arrow-back'} size={30} color='black' style={{ marginLeft: '7%', marginTop: '6%' }} />
      </TouchableOpacity>

      <View style={styles.avatar}>
        <UserAvatar
          size={120}
          backgroundColor="#0be881"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/672px-Aristotle_Altemps_Inv8575.jpg"
        />
        <Text style={styles.txtNome}>Thiago André</Text>
      </View>

      <View style={{ marginTop: 15 }}>
      
          <TouchableOpacity onPress={()=>{navigation.navigate('MeusDebatesCriados')}}>
            <Card  elevation={3} style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
              <Text style={{ textAlign: 'center' }}>Debates criados</Text>
              <Text style={[styles.txtTopics], { textAlign: 'center' }}>1</Text>
            </Card>
          </TouchableOpacity>

          
        </View>


    </ImageBackground>

    <View style={styles.containerConteudo}>
      <Text style={styles.txtTopics}>Sua visão:</Text>
      <Card elevation={1} style={{ padding: 10, marginTop: 5, marginBottom: 15 }}>
        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
      </Card>

      <Text style={styles.txtTopics}>Seus temas de interesse:</Text>
      <View style={styles.interessesContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <Text style={styles.interesseItem}>Liberação das drogas</Text>
          <Text style={styles.interesseItem}>Aborto</Text>
          <Text style={styles.interesseItem}>Armamento</Text>
          <Text style={styles.interesseItem}>Armamento</Text>
          <Text style={styles.interesseItem}>Armamento</Text>
        </View>
      </View>

      <Text style={styles.txtTopics}>Suas coordenadas:</Text>
      <Image style={{ width: 200, height: 200, alignSelf: 'center', marginTop: 10, resizeMode: 'contain', }} source={require('../../../assets/coordenadas.jpg')} />
      <View style={{ alignSelf: 'center' }}>
        <TouchableOpacity
          onPress={() => { navigation.navigate("TesteView") }}
          style={styles.btn}>
          <Text style={styles.txtBtn}>
            refazer teste
        </Text>
        </TouchableOpacity>

        <View style={{ marginTop: 10 }} />

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>
            escolher coordenadas
        </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={()=>{navigation.navigate('MeusDebatesCriados')}}>
            <Card  elevation={3} style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
              <Text style={{ textAlign: 'center' }}>Debates criados</Text>
              <Text style={[styles.txtTopics], { textAlign: 'center' }}>1</Text>
            </Card>
          </TouchableOpacity>
    </View>


  </ScrollView>;
}


const styles = StyleSheet.create({
  containerScroll: {
    backgroundColor: 'white',
  },
  capa: {
    width: '100%',
    height: capaHeight,
    alignItems: 'center'
  },
  avatar: {
    marginTop: capaHeight - 60,
    alignItems: 'center'
  },
  txtNome: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },
  containerConteudo: {
    marginTop: 150,
    padding: 25
  },
  txtTopics: {
    fontWeight: 'bold',
    fontSize: 15
  },
  interessesContainer: {
    marginTop: 10,
    marginBottom: 15
  },
  interesseItem: {
    borderRadius: 10,
    backgroundColor: '#6B84C5',
    paddingHorizontal: 7,
    paddingVertical: 5,
    marginLeft: 10,
    marginTop: 10,
    color: 'white'
  },
  btn: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#D9DCEC',
    alignSelf: 'center',
    padding: 10
  },
  txtBtn: {
    fontWeight: 'bold',
    color: '#7986CE',
    fontSize: 15
  },
  btnVoltar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    position: 'absolute',
    left: 10,
    top: 10
  }
})