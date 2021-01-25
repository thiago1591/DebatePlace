import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { UserImageContainer, UserImage, TxtName, VisaoContainer, Border, TxtOpnion, InteressesContainer, TxtTopic, CoordenadasImage, ButtonContainer, Button, TxtButton, BackButton } from './styles';
import Header from '../../../../components/Header'
import FlashMessage from "react-native-flash-message";
import InteressesList from '../../../../components/InteressesList'
import Swiper from 'react-native-deck-swiper'
import Icon from 'react-native-vector-icons/FontAwesome';


const user = [
  { name: 'Thiago', age: 20 },
  { name: 'João', age: 30 },
  { name: 'gustavo', age: 25 },
  { name: 'bill gates', age: 17 },
  { name: 'Elon', age: 23 }
]

const CardRender = ({ card }) => {
  return (<>
   
    <Card style={{ paddingHorizontal: 20, flex: 1 }}>

      <UserImageContainer>
        <UserImage source={require('../../../../../assets/users/bill.jpg')} />
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
        <CoordenadasImage style={{ resizeMode: 'contain' }} source={require('../../../../../assets/coordenadas.jpg')} />
      </View>

      <FlashMessage animationDuration={700}
        style={{ height: 40, borderRadius: 3, backgroundColor: 'rgba(0,0,0,0.6)' }}

        duration={5000}
        position="top" />
    </Card>
    </>
  );
}

const CardComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
       <View>
        <Header title="Debates Privados" />
      </View>

      <Swiper
        cards={user}
        backgroundColor={'transparent'}
        renderCard={card => <CardRender card={card} />}
        infinite
        cardVerticalMargin={0}
        stackSize={2}
        stackScale={0}
        stackSeparation={0}
      />
      { <ButtonContainer>
        <Button>
          <TxtButton>Pular</TxtButton>
        </Button>
        <BackButton>
          <Icon name="undo" size={30} color="gray" />
        </BackButton>
        <Button>
          <TxtButton>Debater</TxtButton>
        </Button>
      </ButtonContainer>}
    </SafeAreaView>
  )
}

export default CardComponent;