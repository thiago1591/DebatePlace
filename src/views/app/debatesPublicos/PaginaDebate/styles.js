import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const Container = styled.ScrollView`
`;

export const CardComponent = styled(Card)`
    margin-bottom:10px;
    padding:10px;
`
export const Answer = styled.TouchableOpacity`
    border-width:1.2px;
    border-color: #d3e2e6;
    height:56px;
    padding: 18px 24px;
    margin:5px 0;
    background-color:white
`

export const AnswerTxt = styled.Text`
    color:gray;
    font-size:14px;
`
export const TopicTxt = styled.Text`
    margin:5px 0 10px 15px;
    font-size:16px;
`
export const TxtRespostaNumero = styled.Text`
    text-align:center;
    font-weight:bold;
    color:gray;
`

export const InfoContainer = styled.View`
    flex-direction:row;
    border-top-width:1px;
    border-top-color:#d3e2e6;
    padding-top:5px;
    margin-top:5px;
`


