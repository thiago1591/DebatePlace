import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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

export const ButtonContainer = styled.Button`
    height:8%;
    position:absolute;
    bottom:0;
    background-Color:blue;
`
