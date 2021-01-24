import React from 'react';
import UserAvatar from "@muhzi/react-native-user-avatar";
import {UserInfoContainer, UserName, Title, Message } from './styles';

const opniao = () => {
  return <>
     <UserInfoContainer>
          <UserAvatar
            size={30}
            backgroundColor="#0be881"
            src="https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/256x256/plain/dude3.png" />
          <UserName>Aristóteles Gomes</UserName>
        </UserInfoContainer>
        <Message>Envolvidos tambem pelo contexto Humanista Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus dasdas asd ad adas asd aasdastry's standard dummy</Message>
  </>
}

export default opniao;