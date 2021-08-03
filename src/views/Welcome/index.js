import React,{useEffect} from 'react';
import { View,Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import { 
  Container, 
  Header,
  BotaoView, 
  Title, 
  SubTitle,
  Button,
  ButtonTxt,
  Icon,
  AlreadyHaveAccountTxt
  } from './styles';

const Welcome = () => {

    useEffect(()=>{
        GoogleSignin.configure({
            webClientId: '644040292168-pfvcibkaa9rvkm0sjfohvtmer2b090qt.apps.googleusercontent.com',
          });
    },[])

    signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          this.setState({ userInfo });
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          } else if (error.code === statusCodes.IN_PROGRESS) {
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          } else {
          }
        }
      };

    const navigation = useNavigation();
    return (
        <Container
            source={require('../../../assets/background-welcome.png')}>

            <Header>
                <Title>Debate Place</Title>
                <SubTitle>Um lugar para debater</SubTitle>
            </Header>

            <BotaoView>
                <Button
                    onPress={() => signIn()}>
                    <Icon source={require('../../../assets/googleIcon.png')} />
                    <TxtButton>Cadastrar com o Google</TxtButton>
                </Button>

                <Button
                    onPress={() => navigation.navigate('EditarPerfil')}>
                    <Icon resizeMode='contain' source={require('../../../assets/emailIcon.png')} />
                    <ButtonTxt>Cadastrar com o Email</ButtonTxt>
                </Button> 

                <AlreadyHaveAccountTxt >Já tem uma conta? 
                    <Text style={{fontWeight:'bold'}}>Entre</Text>
                </AlreadyHaveAccountTxt>
            </BotaoView>

        </Container>
    )
}

export default Welcome;