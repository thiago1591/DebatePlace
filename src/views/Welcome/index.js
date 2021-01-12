import React from 'react';
import { View,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, BotaoView, Title, SubTitle } from './styles';

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
                    title='Avançar'
                    onPress={() => navigation.navigate('Avisos')}
               />
            </BotaoView>

        </Container>
    )
}

export default Welcome;