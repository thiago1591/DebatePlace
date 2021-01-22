import React from 'react';
import UserAvatar from "@muhzi/react-native-user-avatar";
import {UserInfoContainer, UserName, Title, Message } from './styles';

const TemaDebate = () => {
    return (
    <>
        <UserInfoContainer>
            <UserAvatar size={30} backgroundColor="#0be881"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/672px-Aristotle_Altemps_Inv8575.jpg" />
            <UserName>Aristóteles Gomes</UserName>
        </UserInfoContainer>
        <Title>Liberalismo é realmente o único sistema bom?</Title>
        <Message>Envolvidos tambem pelo contexto Humanista Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</Message>
    </>
    )
}

export default TemaDebate;