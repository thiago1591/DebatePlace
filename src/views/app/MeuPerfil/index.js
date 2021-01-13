import React from 'react';
import { View, Text } from 'react-native';
import InteressesList from '../../../components/InteressesList'
import Icons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import UserAvatar from "@muhzi/react-native-user-avatar";
import { Card } from 'react-native-paper';
import {
    ScrollView, Capa, ReturnButton, TxtName, UserImageContainer, CardWrapper1, TxtCardTitle,
    TxtCardNumber, Conteudo, txtTopics, CardWrapper2, CoordenadasImage, ButtonsComponent
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
                style={{paddingVertical:10}} 
                elevation={3} 
                onPress={()=>{navigation.navigate('MeusDebatesCriados')}}>
                    <TxtCardTitle>DEBATES PÚBLICOS CRIADOS</TxtCardTitle>
                    <TxtCardNumber>1</TxtCardNumber>
                </Card>
            </CardWrapper1>
            <Conteudo>
                <Text>Sua visão:</Text>

                <CardWrapper2>
                    <Card elevation={3} style={{padding:8}}>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Text>
                    </Card>
                </CardWrapper2>

                <Text>Seus temas de interesse:</Text>
                <InteressesList />

                <Text>Suas coordenadas:</Text>
                <CoordenadasImage source={require('../../../../assets/coordenadas.jpg')} />

            </Conteudo>

        </ScrollView>
    )
}

export default MeuPerfil;