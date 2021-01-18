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

`

export const Input = styled.TextInput`
    height:40px;
    width:${`${wp('75%')}px`};;
    border-bottom-color:gray;
    border-bottom-width:1px;
    margin-bottom: ${`${hp('4%')}px`};
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
    justify-content:center
`

export const TxtButton = styled.Text`
    text-align:center;
    color:white;
    font-family:sans-serif-medium;
    font-size:${`${hp('2.6%')}px`}
`