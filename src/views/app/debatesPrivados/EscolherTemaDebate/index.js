import React from 'react';
import { } from 'react-native';
import InteressesList from '../../../../components/InteressesList'

import { Container, UserImage, TxtTopic, TxtName, UserImageContainer,InteressesContainer,Input,Button,TxtButton} from './styles';


const EscolherTemaDebate = () => {
    return <Container>

        <UserImageContainer>
            <UserImage source={require('../../../../../assets/foto-default.png')} />
            <TxtName>Thiago André</TxtName>
        </UserImageContainer>
    <InteressesContainer>
    <TxtTopic>Temas que interessam Thiago:</TxtTopic>
        <InteressesList />
    </InteressesContainer>
        
        <TxtTopic>Digite abaixo o tema que deseja debater:</TxtTopic>
        <Input maxLength={40} />
        <Button><TxtButton>chamar para debate</TxtButton></Button>
    </Container>


}

export default EscolherTemaDebate;