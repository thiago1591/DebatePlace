
import styled from 'styled-components/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Container = styled.ImageBackground`
    width:100%;
    height:100%;
`;

export const Title = styled.Text`
    text-align:center;
    font-size:55px;
    margin-top:15%;
    color:#FFF;
    font-weight:bold
`

export const SubTitle = styled.Text`
    text-align:center;
    color:#FFF;
    font-size:23px;
  
`
export const BotaoView = styled.View`
    display:flex;
    width:${`${wp('70%')}px`};
    height:${`${hp('22%')}px`};
    align-self:center;
    margin-bottom:${`${hp('1.2%')}px`};
`
export const Button = styled.TouchableOpacity`
    background-color:'rgba(255, 255, 255, 1)';
    padding:${`${hp('1.8%')}px`};
    border-radius:${`${hp('3%')}px`};
    margin-bottom:${`${hp('1%')}px`};
    flex-direction:row;
    justify-content:center;
    align-items:center
`

export const TxtButton = styled.Text`
font-weight:bold;
font-size:${`${hp('2%')}px`};
color:#2d6dc2;
`

export const Icon = styled.Image`
    margin-right:${`${wp('1.5%')}px`};
    width: ${`${hp('3%')}px`};
    height:${`${hp('3%')}px`};
`

