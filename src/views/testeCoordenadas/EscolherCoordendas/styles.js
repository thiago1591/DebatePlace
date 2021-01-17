import styled from 'styled-components/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const Container = styled.View`
  flex:1;
  background-color:white;
  padding: ${`${hp('2')}px`};
`;

export const Title = styled.Text`
    text-align:center;
    font-size:${`${wp('6.5%')}px`};
    font-weight:bold;
    margin-bottom:${`${hp('3.5%')}px`};
`

export const TxtDuvida = styled.Text`
    font-size: ${`${wp('3%')}px`};
`

export const TxtTopics = styled.Text`
    font-size:${`${wp('4.5%')}px`};
    font-family:sans-serif-medium;
    margin: ${`${hp('2.5%')}px`} 0;
`

export const CoordenadasImage = styled.Image`
    align-self:center;
    height:${`${wp('60%')}px`};
    width:${`${wp('60%')}px`};
    margin-top:${`${hp('1%')}px`}
`;


export const Button = styled.TouchableOpacity`
    border-radius:4px;
    border-width:1px;
    border-color:#D9DCEC;
    align-self: center;
    padding:${`${hp('1%')}px`};
    margin: ${`${hp('2%')}px`} 0;
`

export const TxtButton = styled.Text`
    font-weight:bold;
    color:#7986CE;
    font-size:${`${wp('3.5%')}px`}
` 

export const EscolhaContainer = styled.View`
    flex-direction:row;
    justify-content:space-around
`