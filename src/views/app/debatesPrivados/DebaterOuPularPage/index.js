import React from 'react';
import { View} from 'react-native'
import Header from '../../../../components/Header2'
import { useNavigation } from '@react-navigation/native';
import InteressesList from '../../../../components/InteressesList'
import UserAvatar from "@muhzi/react-native-user-avatar";
import { Card } from 'react-native-paper';
import { Container, CardWrapper, TxtName, UserImage, CoordenadasImage, VisaoContainer, Border, ButtonContainer, Button, TxtButton, TxtTopic, TxtOpnion, BackButton, UserImageContainer, InteressesContainer} from './styles';
import Swiper from 'react-native-deck-swiper';
import data from '../../data'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DebaterOuPularPage = () => {
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(0);
  const onSwiped = () => {
    setIndex((index + 1) % data.length);
  }
  return (
    <>
      <View>
        <Header title="Debates Privados" />
      </View>

      <Container style={{ flex: 1}}>
        
        <Card style={{ paddingHorizontal: 20,flex:1}}>

          <UserImageContainer>
            <UserImage source={require('../../../../../assets/foto-default.png')} />
            <TxtName>Thiago André</TxtName>
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
            <CoordenadasImage style={{ resizeMode: 'contain' }} source={require('../../../../../assets/coordenadas.jpg')} />
          </View>
          
        </Card> 
      
      </Container>

      <ButtonContainer>



        <BackButton>

        </BackButton>
        <Button onPress={() => { navigation.navigate('EscolherTemaDebate') }}>
          <TxtButton>Debater</TxtButton>
        </Button>
      </ButtonContainer>
    </>
  )
}

export default DebaterOuPularPage;