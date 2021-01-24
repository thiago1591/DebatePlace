import React from 'react';
import { View,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, BotaoView, Title, SubTitle,Button,TxtButton,Icon } from './styles';

const Welcome = () => {
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
                    onPress={() => navigation.navigate('EditarPerfil')}>
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