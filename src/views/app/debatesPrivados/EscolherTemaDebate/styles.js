import styled from 'styled-components/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex:1;
  background-color:white;
  padding:0 20px 20px 20px;
`;

export const UserImageContainer = styled.View`
    align-items:center;
    justify-content:center;
    margin-bottom:${`${hp('4%')}px`};
    margin-top:${`${hp('2.5%')}px`};
`

export const UserImage = styled.Image`
height: ${`${hp('11.5%')}px`};
    width: ${`${hp('11.5%')}px`};
    border-radius: ${`${hp('5.25%')}px`};
`

export const Input = styled.TextInput`
   margin:${`${hp('2.5%')}px`} 0;
   font-size:${`${hp('2%')}px`};
   text-align:center; 
   border-width:1px;
   border-color:#ccc4c4;
   border-radius:10px;
`

export const TxtName = styled.Text`
  font-size:${`${hp('2.5%')}px`};
    margin-top:3px;
    font-family:sans-serif-medium;
`

export const TxtTopic = styled.Text`
font-size:${`${hp('2.1%')}px`};
    font-family:sans-serif-medium;
`

export const InteressesContainer = styled.View`
    justify-content:center;
    margin-bottom:${`${hp('4%')}px`};
`
export const Button = styled.TouchableOpacity`
    width:100%;
    height:${`${hp('6%')}px`};
    background-color:#7c99e2;
    justify-content:center;
    border-radius:2px;
`

export const TxtButton = styled.Text`
    text-align:center;
    color:white;
    font-family:sans-serif-medium;
    font-size:${`${hp('2.6%')}px`}
`