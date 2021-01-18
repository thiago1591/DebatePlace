import styled from 'styled-components/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Container = styled.View`
  background-color:#eaedf2;
  flex:1;
`;

export const MessageContainer = styled.View`
    padding:0 ${`${hp('1%')}px`} ${`${hp('1%')}px`}  ${`${hp('1%')}px`};
    flex-direction:row;
`

export const UserName = styled.Text`
    font-family :sans-serif-medium;
    font-size:${`${hp('2%')}px`};
`

export const TxtContainer = styled.View`
  background-color:white;
  margin-left:${`${hp('0.8%')}px`};
  border-radius:${`${hp('1%')}px`};
  padding:${`${hp('0.7%')}px`} ${`${hp('1%')}px`} ${`${hp('1%')}px`} ${`${hp('1%')}px`};
  max-width: 80%;
`

export const TxtMessage = styled.Text`
  font-size:15px
`

export const MessageContainer2 = styled.View`
    padding:0 ${`${hp('1%')}px`} ${`${hp('1%')}px`}  ${`${hp('1%')}px`};
    align-items:flex-end;
`

export const UserName2 = styled.Text`
    font-family :sans-serif-medium;
    font-size:${`${hp('2%')}px`};
`

export const TxtContainer2 = styled.View`
  align-items:flex-end;
  background-color:#7c99e2;
  margin-left:${`${hp('0.8%')}px`};
  border-radius:${`${hp('1%')}px`};
  padding:${`${hp('0.7%')}px`} ${`${hp('1%')}px`} ${`${hp('1%')}px`} ${`${hp('1%')}px`};
  max-width: 80%;
`

export const TxtMessage2 = styled.Text`
  font-size:15px;
  color:white;
`
export const SendMessageContainer = styled.View`
  flex-direction:row;
  margin:5px 10px;
  align-items:center
`

export const InputContainer = styled.View`
    flex-direction:row;
    border-radius:50px;
    background-color:white;
    padding:10px;
    flex:1;
    align-items:center;
` 

export const Input = styled.TextInput`
    flex:1;
    margin: 0 5px;
    padding-top:0;
    padding-bottom:0
`

export const SendButton = styled.TouchableOpacity`
background-color: #7c99e2;
border-radius:50px;
width:50px;
height:50px;
justify-content:center;
align-items:center;
margin-left:5px
`