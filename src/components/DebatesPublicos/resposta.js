import React from 'react';
import UserAvatar from "@muhzi/react-native-user-avatar";
import {UserInfoContainer, UserName, Title, Message } from './styles';

const resposta = ({debate}) => {

  return <>
     <UserInfoContainer>
          <UserAvatar
            size={30}
            backgroundColor="#0be881"
            src="https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/256x256/plain/dude3.png" />
          <UserName>{debate.nome_user_resposta}</UserName>
        </UserInfoContainer>
        <Message>{debate.mensagem_resposta}</Message>
  </>
}

export default resposta;