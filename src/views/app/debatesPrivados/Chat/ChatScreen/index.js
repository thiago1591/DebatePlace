import React,{useEffect} from 'react'
import { View, Text, ScrollView, } from 'react-native'
import UserAvatar from "@muhzi/react-native-user-avatar"
import { 
    Container, 
    UserName, 
    MessageContainer, 
    TxtMessage, 
    TxtContainer, 
    MessageContainer2,
    TxtContainer2, 
    TxtMessage2,
    SendMessageContainer,
    InputContainer,
    SendButton,
    Input 
    } from './styles'

import Icon from 'react-native-vector-icons/MaterialIcons'
import IO from 'socket.io-client'
import api from '../../../../../services/api'


const Teste = () => {
    var socket = IO('http://192.168.0.15:3333')
    const messageObject = {autor:'thiago',message:'olá mundo teste'}
    const onClick = () => async () => {
        socket.emit('sendMessage', 'messageObject')
    }

    useEffect(()=>{
        socket.emit('sendMessage', messageObject)
    },[])

  return ( <>
    <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{paddingTop:10}}></View>
            <MessageContainer>

                <View>
                    <UserAvatar
                        userName="John Samuel"
                        size={35}
                        src="https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg" />
                </View>

                <TxtContainer>
                    <UserName>Thiago</UserName>
                    <TxtMessage>
                    Lorem Ipsum is simply dummy text of 
                    </TxtMessage>
                </TxtContainer>

            </MessageContainer>

            <MessageContainer>

                <UserAvatar
                    userName="John Samuel"
                    size={35}
                    src="https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg" />

                <TxtContainer>
                    <UserName>Thiago</UserName>
                    <TxtMessage>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallyLorem Ipsum is simply dummy text of the printing and typesetting
                </TxtMessage>
                </TxtContainer>

            </MessageContainer>

            <MessageContainer2>

               

                <TxtContainer2>
                    <TxtMessage2>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallyLorem Ipsum is simply dummy text 
                </TxtMessage2>
                </TxtContainer2>

            </MessageContainer2>

            <MessageContainer>

                <UserAvatar
                    userName="John Samuel"
                    size={35}
                    src="https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg" />

                <TxtContainer>
                    <UserName>Thiago</UserName>
                    <TxtMessage>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallyLorem Ipsum is simply dummy text of the printing and typesetting
                </TxtMessage>
                </TxtContainer>

            </MessageContainer>
            
        </ScrollView>
        
        <SendMessageContainer>

            <InputContainer>
                <Icon name="attachment" size={28} color="gray" />
                <Input />
            </InputContainer>

            <SendButton onPress={onClick}>
            <Icon name="send" size={28} color="white" />
            </SendButton>
        </SendMessageContainer>
      
    </Container>
    </>
  )
}

export default Teste