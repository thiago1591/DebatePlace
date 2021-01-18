import React from 'react';
import { View,ScrollView} from 'react-native';
import InteressesList from '../../../../components/InteressesList'

import { Container, UserImage, TxtTopic, TxtName, UserImageContainer,InteressesContainer,Input,Button,TxtButton} from './styles';


const EscolherTemaDebate = () => {
    return <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
       <View style={{flex:1}}>
       <UserImageContainer>
            <UserImage source={require('../../../../../assets/foto-default.png')} />
            <TxtName>Thiago André</TxtName>
        </UserImageContainer>
    <InteressesContainer>
    <TxtTopic>Temas que interessam Thiago:</TxtTopic>
        <InteressesList />
    </InteressesContainer>
       </View>

       <View style={{flex:1,marginLeft:20}}>
       <UserImageContainer>
            <UserImage source={require('../../../../../assets/foto-default.png')} />
            <TxtName>Thiago André</TxtName>
        </UserImageContainer>
    <InteressesContainer>
    <TxtTopic>Temas que interessam você:</TxtTopic>
        <InteressesList />
    </InteressesContainer>
       </View>
        </View>
        
        <View>
        <TxtTopic>Digite abaixo um tema que deseja debater:</TxtTopic>
        <Input maxLength={40} />
        </View>
        <Button><TxtButton>chamar para debate</TxtButton></Button>
        </ScrollView>
    </Container>


}

export default EscolherTemaDebate;