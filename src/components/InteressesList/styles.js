import styled from 'styled-components/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const InteressesContainer = styled.View`
flex-wrap:wrap;
`;

export const InteresseItem = styled.Text`
    border-radius:${`${hp('2.5%')}px`};
    border-width:1px;
    border-color:#87a19d;
    padding:${`${hp('0.6%')}px`} ${`${hp('1.2%')}px`};
    margin: ${`${hp('1%')}px`} ${`${hp('1%')}px`} 0 0;
    color:#87a19d;
    font-size:${`${hp('1.8%')}px`};
`


  