import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Icon, ScrollView} from 'react-native'
import Header from '../../../../components/Header2'
import { useNavigation } from '@react-navigation/native';
import InteressesList from '../../../../components/InteressesList'
import UserAvatar from "@muhzi/react-native-user-avatar";
import { Card } from 'react-native-paper';
import { Container, CardWrapper, TxtName, UserImage, CoordenadasImage, VisaoContainer, ButtonContainer, Button, TxtButton, TxtTopic, TxtOpnion, BackButton,UserImageContainer,InteressesContainer } from './styles';

var screenHeight = Dimensions.get('window').height;

const DebaterOuPularPage = () => {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <Header title="Debates Privados" />
      </View>

      <Container style={{flex:1}}>

        <Card style={{paddingHorizontal: 20,flex:1}}>
          <ScrollView showsVerticalScrollIndicator ={false} >
          <UserImageContainer>
            <UserImage  source={require('../../../../../assets/foto-default.png')} />
            <TxtName>Thiago André</TxtName>

          </UserImageContainer>

          <VisaoContainer>
            <TxtOpnion> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a unknown printer took a galley of type and scrambled</TxtOpnion>
          </VisaoContainer>

          <InteressesContainer>
            <TxtTopic>Temas de interesse</TxtTopic>
            <InteressesList />
          </InteressesContainer>
          <View style={{justifyContent: 'center', paddingBottom: 10}}>
            <CoordenadasImage style={{ resizeMode: 'contain' }} source={require('../../../../../assets/coordenadas.jpg')} />
          </View>
          <View  />

          </ScrollView>
        </Card>

      </Container>

        <ButtonContainer>
          <Button>
            <TxtButton>Pular</TxtButton>
          </Button>


          <BackButton>

          </BackButton>
          <Button>
            <TxtButton>Debater</TxtButton>
          </Button>
        </ButtonContainer>
    </>
  )
}

export default DebaterOuPularPage;