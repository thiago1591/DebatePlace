import styled from 'styled-components/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Container = styled.ScrollView`
  padding:${`${hp('2.2%')}px`};
  flex:1;
  background-color:white
`;

export const Title = styled.Text`
    text-align:center;
    font-size:20px;
    font-weight:bold;
    margin-bottom:${`${hp('3.5%')}px`};
`

export const TxtTopics = styled.Text`
    font-size:15px;
    font-weight:bold;
    margin-bottom: ${`${hp('1%')}px`};
`

export const EixosContainer = styled.View`
    margin-bottom: ${`${hp('3%')}px`};
`

export const Text = styled.Text`
    font-size: ${`${hp('2.2%')}px`};
`

export const ButtonContainer = styled.View`
height:${`${hp('10%')}px`};
justify-content:center;
background-color:white
`

export const Button = styled.TouchableOpacity`
    border-color:white;
    border-radius:${`${hp('1.8%')}px`};
    margin:0 ${`${hp('1%')}px`};
    height:${`${hp('6%')}px`};
    justify-content:center;
    background-color:#7c99e2;
 
`
export const TxtButton = styled.Text`
    text-align:center;
    color:white;
    font-family:sans-serif-medium;
    font-size:${`${hp('2.5%')}px`}
`
export const ScrollView = styled.ScrollView`
`


