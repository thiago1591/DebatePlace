import styled from 'styled-components/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from '../../adjust'

export const InteressesContainer = styled.View`
flex-wrap:wrap;
`;

export const InteresseItem = styled.Text`
    border-radius:${`${hp('2.5%')}px`};
    border-width:1px;
    border-color:#87a19d;
    padding:${`${normalize(5)}px`} ${`${normalize(7)}px`};
    margin: ${`${normalize(6)}px`} ${`${normalize(7)}px`} 0 0;
    color:#87a19d;
    font-size:${`${normalize(13)}px`};
`


  