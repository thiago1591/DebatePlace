import React,{useEffect} from 'react';
import { View,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import { Container, BotaoView, Title, SubTitle,Button,TxtButton,Icon } from './styles';
import auth from '@react-native-firebase/auth';

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
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      };

    const navigation = useNavigation();
    return (
        <Container
            source={require('../../../assets/background-welcome.png')}>

            <View style={{ flex: 10 }}>
                <Title >Debate Place</Title>
                <SubTitle >Um lugar para debater</SubTitle>
            </View>

            <BotaoView>
                <Button
                    onPress={() => signIn()}>
                        <Icon source={require('../../../assets/googleIcon.png')} />
                        <TxtButton>Cadastrar com o Google</TxtButton>
                    </Button>
                    <Button
                    onPress={() => navigation.navigate('EditarPerfil')}>
                        <Icon resizeMode='contain' source={require('../../../assets/emailIcon.png')} />
                        <TxtButton>Cadastrar com o Email</TxtButton>
                    </Button> 
                    <Text style={{color:'white',alignSelf:'center',fontSize:16,marginTop:5}}>Já tem uma conta? <Text style={{fontWeight:'bold'}}>Entre</Text></Text>
            </BotaoView>

        </Container>
    )
}

export default Welcome;