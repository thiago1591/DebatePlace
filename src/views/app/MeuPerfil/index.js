import React from 'react';
import { View, Text } from 'react-native';
import InteressesList from '../../../components/InteressesList'
import Icons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import UserAvatar from "@muhzi/react-native-user-avatar";
import { Card } from 'react-native-paper';
import {
    ScrollView, Capa, ReturnButton, TxtName, UserImageContainer, CardWrapper1, TxtCardTitle,
    TxtCardNumber, Conteudo, TxtTopics, CardWrapper2, CoordenadasImage, ButtonsContainer, Button, TxtButton
} from './styles';

const MeuPerfil = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <Capa source={require('../../../../assets/math.jpg')}>
                <ReturnButton>
                    <Icons name={'arrow-back'} size={30} color='black' style={{ marginLeft: '7%', marginTop: '6%' }} />
                </ReturnButton>

                <UserImageContainer>
                    <View style={{ marginBottom: -60 }}>
                        <UserAvatar
                            size={120}
                            backgroundColor="#0be881"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/672px-Aristotle_Altemps_Inv8575.jpg"
                        />
                        <TxtName>Thiago André</TxtName>
                    </View>
                </UserImageContainer>
            </Capa>

            <CardWrapper1>
                <Card
                    style={{ paddingHorizontal: 10, paddingVertical: 10 }}
                    elevation={3}
                    onPress={() => { navigation.navigate('MeusDebatesCriados') }}>
                    <TxtCardTitle>DEBATES PÚBLICOS CRIADOS</TxtCardTitle>
                    <TxtCardNumber>1</TxtCardNumber>
                </Card>
            </CardWrapper1>

            <Conteudo>
                <TxtTopics>Sua visão:</TxtTopics>
                <CardWrapper2>
                    <Card style={{ padding: 10 }}>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Text>
                    </Card>
                </CardWrapper2>

                <View style={{ paddingBottom: 15 }}>
                    <TxtTopics>Seus temas de interesse:</TxtTopics>
                    <InteressesList />
                </View>

                <TxtTopics>Suas coordenadas:</TxtTopics>
                <CoordenadasImage style={{ resizeMode: 'contain' }} source={require('../../../../assets/coordenadas.jpg')} />
            </Conteudo>

            <ButtonsContainer>
                <Button onPress={() => { navigation.navigate("TesteView") }}>
                    <TxtButton>refazer teste</TxtButton>
                </Button>

                <Button>
                    <TxtButton>escolher coordenadas </TxtButton>
                </Button>
            </ButtonsContainer>

        </ScrollView>
    )
}

export default MeuPerfil;