import React, { useEffect, useState } from 'react';
import Swiper from 'react-native-deck-swiper'
import { Card } from 'react-native-paper';
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {UserImageContainer,UserImage,TxtName,VisaoContainer,Border,TxtTopic,TxtOpnion,InteressesContainer,CoordenadasImage} from './styles'
import InteressesList from '../../components/InteressesList'

const colors = {
    red: '#EC2379',
    blue: '#0070FF',
    gray: '#777777',
    white: '#ffffff',
    black: '#000000'
  };


const Teste = () => {
    const [users, setUsers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const user = [
        { name: 'Thiago', age: 20, image: '../../../assets/users/bill.jpg' },
        { name: 'João', age: 30, image: '../../../assets/users/elon.jpg' },
        { name: 'gustavo', age: 25, image: '../../../assets/users/yuval.jpg' },
        { name: 'bill gates', age: 17, image: '../../../assets/users/zuckerberg.jpg' },
        { name: 'Elon', age: 23, image: '../../../assets/users/bill.jpg' }
    ]

    const CardComponent = ({ card }) => {
        return (
            <Card style={{ paddingHorizontal: 20, flex: 1 }}>

            <UserImageContainer>
                <UserImage source={require('../../../assets/users/bill.jpg')} />
                <TxtName>{card.name}</TxtName>
            </UserImageContainer>

            <VisaoContainer>
                <Border>
                    <TxtTopic>Texto Resumitivo</TxtTopic>
                    <TxtOpnion>Lorem Ipsum is simply dummy text asda ad aa  asdasd asdas Lorem Ipsum is simply Lorem Ipsum is simply dummy text asda ad aa  asdasd asdas Lorem Ipsum is simply Lorem Ipsum is simply  is simply  </TxtOpnion>
                </Border>
            </VisaoContainer>

            <InteressesContainer>
                <TxtTopic>Temas de interesse</TxtTopic>
                <InteressesList />
            </InteressesContainer>

            <View style={{ justifyContent: 'center', flex: 1 }}>
                <CoordenadasImage style={{ resizeMode: 'contain' }} source={require('../../../assets/coordenadas.jpg')} />
            </View>

            <FlashMessage animationDuration={700}
                style={{ height: 40, borderRadius: 3, backgroundColor: 'rgba(0,0,0,0.6)' }}

                duration={5000}
                position="top" />
        </Card>
        );
      };
    return (
        <SafeAreaView style={styles.container}>
     
        <Swiper
          cards={user}
          renderCard={card => <CardComponent card={card} />}
          infinite
          cardVerticalMargin={0}
          stackSize={2}
          stackScale={0}
          stackSeparation={0}
        />
    
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white
    },
    swiperContainer: {
      flex: 1
    },
    bottomContainer: {
      flex: 0.1,
      justifyContent: 'space-evenly'
    },
    bottomContainerMeta: { alignContent: 'flex-end', alignItems: 'center' },
    bottomContainerButtons: {
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },
    cardImage: {
      width: 160,
      flex: 1,
      resizeMode: 'contain'
    },
    card: {
      flex: 1,
      borderRadius: 8,
      shadowRadius: 25,
      shadowColor: colors.black,
      shadowOpacity: 0.08,
      shadowOffset: { width: 0, height: 0 },
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
      borderWidth:3,
    },
    text: {
      textAlign: 'center',
      fontSize: 50,
      backgroundColor: 'transparent'
    },
    done: {
      textAlign: 'center',
      fontSize: 30,
      color: colors.white,
      backgroundColor: 'transparent'
    },
    text: { fontFamily: 'Courier' },
    heading: { fontSize: 24, marginBottom: 10, color: colors.gray },
    price: { color: colors.blue, fontSize: 32, fontWeight: '500' }
  });

export default Teste;