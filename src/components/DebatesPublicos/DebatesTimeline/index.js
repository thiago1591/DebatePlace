import React from 'react';
import { Text, View } from 'react-native'
import { Card } from 'react-native-paper';
import LinhaRespostas from '../LinhaRespostas'
import { Container, DebateInfosContainer, UserInfoContainer, UserName, Title, Message, AnswerContainer, ActionContainer, Button, TxtButton,BtnAdd} from './styles';
import UserAvatar from "@muhzi/react-native-user-avatar";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Autolink from 'react-native-autolink';

const DebatesTimeline = () => {
  return <Container>
    <Card style={{ paddingHorizontal: 10, paddingTop: 10 }}>

      <DebateInfosContainer>
        <UserInfoContainer>
          <UserAvatar size={30} backgroundColor="#0be881"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/672px-Aristotle_Altemps_Inv8575.jpg" />
          <UserName>Aristóteles Gomes</UserName>
        </UserInfoContainer>
        <Title>Liberalismo é realmente o único sistema bom?</Title>
        <Message>Envolvidos tambem pelo contexto Humanista Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</Message>
      </DebateInfosContainer>

      <LinhaRespostas />

      <AnswerContainer>
        <UserInfoContainer>
          <UserAvatar
            size={30}
            backgroundColor="#0be881"
            src="https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/256x256/plain/dude3.png" />
          <UserName>Aristóteles Gomes</UserName>
        </UserInfoContainer>
        <Message>Envolvidos tambem pelo contexto Humanista Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus dasdas asd ad adas asd aasdastry's standard dummy</Message>
      </AnswerContainer>


      <View style={{ flex: 1}}>
        <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'flex-end' }}>

          <View style={{ flexDirection: 'row', marginLeft: 5, marginVertical: 10, alignSelf: 'flex-start' }}>
            <FontAwesome style={{ marginTop: 2 }} name="flag" size={17} color="green" />
            <Text style={{ marginLeft: 4, color: 'gray' }}>10</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 5, marginVertical: 10, alignSelf: 'flex-start' }}>
            <EvilIcons name="comment" size={23} color="gray" />
            <Text style={{ marginLeft: 0, color: 'gray' }}>10</Text>
          </View>
         
          

        </View>
      </View>

        <ActionContainer>
          <Button>
            <Ionicons style={{ marginTop: 2 }} name="md-flag" size={17} color="green" />
            <TxtButton margin={4}>Seguir Debate</TxtButton>
          </Button>
          <Button>
            <EvilIcons name="comment" size={25} color="gray" />
            <TxtButton margin={2}>Responder</TxtButton>
          </Button>

        </ActionContainer>
    </Card>

  
  </Container>
}

export default DebatesTimeline;