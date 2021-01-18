import styled from 'styled-components/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Container = styled.View`
  background-color:white;
  flex:1;
  padding-top:${`${hp('1.2%')}px`}
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
  background-color:#eaedf2;
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
