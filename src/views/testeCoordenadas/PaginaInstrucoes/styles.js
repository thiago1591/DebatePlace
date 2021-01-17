import styled from 'styled-components/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Container = styled.ScrollView`
  padding:5%;
  flex:1;
  background-color:white
`;

export const Title = styled.Text`
    text-align:center;
    font-size:${`${wp('6.5%')}px`};
    font-weight:bold
`

export const CoordenadasImage = styled.Image`
       width:${`${hp('20%')}px`};
    height:${`${hp('20%')}px`};
    align-self: center;
    margin:${`${hp('2.5%')}px`} 0;
`

export const TxtAviso = styled.Text`
    font-size: ${`${hp('2%')}px`};
    margin-bottom:${`${hp('2.5%')}px`};
`

export const TxtTopics = styled.Text`
     font-size:15px;
    font-weight:bold;
    margin-bottom:${`${hp('2.5%')}px`};
`

export const ButtonsContainer = styled.View`
    align-items:flex-start
`

export const Button = styled.TouchableOpacity`
    border-radius:4px;
    border-width:1px;
    border-color:#bcc1d6;
    padding:${`${hp('1.5%')}px`};
    margin-bottom:${`${hp('2%')}px`};
`

export const TxtButton = styled.Text`
    font-weight:bold;
    color:#7986CE;
    font-size:${`${hp('2.1%')}px`};
` 




