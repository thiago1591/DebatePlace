import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Icon, ScrollView} from 'react-native'
import Header from '../../../../components/Header2'
import { useNavigation } from '@react-navigation/native';
import InteressesList from '../../../../components/InteressesList'
import UserAvatar from "@muhzi/react-native-user-avatar";
import { Card } from 'react-native-paper';
import { Container, CardWrapper, TxtName, UserImage, CoordenadasImage, VisaoContainer, ButtonContainer, Button, TxtButton, TxtTopic, TxtOpnion, BackButton,UserImageContainer } from './styles';

var screenHeight = Dimensions.get('window').height;

const DebaterOuPularPage = () => {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <Header title="Debates Privados" />
      </View>

      <Container style={{ flex: 17 }}>

        <Card style={{ paddingTop: 8, paddingHorizontal: 20, flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator ={false} >
          <UserImageContainer>
            <UserImage  source={require('../../../../../assets/foto-default.png')} />
            <TxtName>Thiago André</TxtName>

          </UserImageContainer>

          <VisaoContainer>
            <TxtOpnion>Na minha opnião o livre mercado, atraves  de seus incentivos pragmaticos é capaz de atender as demandas e consequentementes suprir as necessidades da população por meio do incentivo do lucro...</TxtOpnion>
          </VisaoContainer>

          <View style={{ justifyContent: 'center', paddingBottom:'5%',flex:10 }}>
            <TxtTopic>Temas de interesse</TxtTopic>
            <InteressesList />
          </View>
          <View style={{justifyContent: 'center', paddingBottom: 10}}>
            <CoordenadasImage style={{ resizeMode: 'contain' }} source={require('../../../../../assets/coordenadas.jpg')} />
          </View>
          <View style={{flex:1}} />

          </ScrollView>
        </Card>

      </Container>

      <View style={{flex:2}}>
        <ButtonContainer>
          <Button style={{backgroundColor:'#bf4a39'}}>
            <TxtButton>Pular</TxtButton>
          </Button>


          <BackButton>

          </BackButton>
          <Button style={{backgroundColor:'#11ad5d'}}>
            <TxtButton>Debater</TxtButton>
          </Button>
        </ButtonContainer>
      </View>
    </>
  )
}

export default DebaterOuPularPage;