import styled from 'styled-components/native';
import {Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

var screenHeight = Dimensions.get('window').height;

export const Container = styled.View`
    padding:0 15px;
`;

export const CardWrapper = styled.View`
    margin: 15px 0 0 0;
    height:${`${screenHeight * 0.75}px`}; 
`

export const UserImageContainer = styled.View`
    align-items:center;
    justify-content:center;
    flex:1;
`

export const UserImage = styled.Image`
    align-self: center;
    height:${`${hp('11%')}px`};
    width:${`${hp('11%')}px`};
    border-radius:${`${hp('6.25%')}px`};
    border-width:2px;
`;

export const TxtName = styled.Text`
    font-size:${`${hp('2.5%')}px`};
    margin-top:3px;
    font-family:sans-serif-medium;
`;

export const TxtTopic = styled.Text`
    font-size:${`${hp('2.1%')}px`};
    font-family:sans-serif-medium;
`

export const TxtOpnion = styled.Text`
    font-size:${`${hp('2%')}px`};
`

export const VisaoContainer = styled.View`
    padding:${`${hp('1%')}px`} 0;
    border-top-width:1px;
    border-top-color: #f0e7e6;
    border-bottom-width:1px;
    border-bottom-color: #f0e7e6;
`
export const Border = styled.View`
    padding: ${`${hp('1%')}px`} 0;
`
export const InteressesContainer = styled.View`
    justify-content:center;
    flex:1;
    margin-top:${`${hp('1%')}px`};
`

export const CoordenadasImage = styled.Image`
    align-self:center;
    height:${`${hp('16%')}px`};
    width:${`${hp('16%')}px`};
    margin: ${`${hp('1.2%')}px`};
`;

export const ButtonContainer = styled.View`
    flex-direction:row;
    justify-content:center;
    height:${`${hp('8.2%')}px`};
    align-items:center;
    padding:0 15px;
`
export const Button = styled.TouchableOpacity`
    border-color:white;
    border-radius:${`${hp('1.8%')}px`};
    margin:0 ${`${hp('1%')}px`};
    height:${`${hp('6%')}px`};
    justify-content:center;
    flex:1;
    background-color:#7c99e2
`
export const TxtButton = styled.Text`
    text-align:center;
    color:white;
    font-family:sans-serif-medium;
    font-size:${`${hp('2.5%')}px`}
`

export const BackButton = styled.TouchableOpacity`
    border-radius: ${`${hp('3.1%')}px`};
    width: ${`${hp('6.2%')}px`};
    height:${`${hp('6.2%')}px`};
    border-color:#e6e6e1;
    border-width:1px;
    background-color:white
`



