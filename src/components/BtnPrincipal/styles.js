import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
