import React,{useEffect} from 'react';
import UserAvatar from "@muhzi/react-native-user-avatar";
import {UserInfoContainer, UserName, Title, Message } from './styles';

const resposta = ({debate}) => {
  useEffect(()=>{console.log(debate)},[])
  return <>
     <UserInfoContainer>
          <UserAvatar
            size={30}
            backgroundColor="#0be881"
            src={debate.imagem_user_resposta} />
          <UserName>{debate.nome_user_resposta}</UserName>
        </UserInfoContainer>
        <Message>{debate.mensagem_resposta}</Message>
  </>
}

export default resposta;