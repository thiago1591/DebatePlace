import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const capaHeight = 30 * Dimensions.get('window').height / 100

export const ScrollView = styled.ScrollView`
  background-color:white;
`;

export const Capa = styled.ImageBackground`
    width:100%;
    height: ${`${capaHeight}px`};
    align-items:center
`

export const ReturnButton = styled.TouchableOpacity`
    width:40px;
    height:40px;
    border-radius:20px;
    background-color:white;
    position:absolute;
    left:10px;
    top:10px
`

export const UserImageContainer = styled.View`
    flex:1;
    justify-content:flex-end;
`

export const TxtName = styled.Text`
    font-weight:bold;
    font-size:16px;
    text-align:center;
`

export const CardWrapper1 = styled.View`
    width:55%;
    align-self: center;
    padding: 10px 0;
    margin: 70px 0 0 0;
`

export const TxtCardTitle = styled.Text`
    font-size:13px;
    text-align:center;
`

export const TxtCardNumber = styled.Text`
    font-size:23px;
    font-weight:bold;
    text-align:center;
`

export const Conteudo = styled.View`
    padding:25px;
`

export const TxtTopics = styled.Text`
    font-size:15px;
    font-weight:bold;
`

export const CardWrapper2 = styled.View`
    padding:10px;
    margin: 5px 0 15px 0;
`

export const CoordenadasContainer = styled.Text`
    padding-bottom:15px;
`


export const CoordenadasImage = styled.Image`
    width:200px;
    height:200px;
    align-self: center;
    margin: 10px 0 0 0;
`

export const ButtonsContainer = styled.View`
    align-self: center;
`

export const Button = styled.TouchableOpacity`
    border-radius:4px;
    border-width:1px;
    border-color:#D9DCEC;
    align-self: center;
    padding:10px;
    margin-bottom:10px
`

export const TxtButton = styled.Text`
    font-weight:bold;
    color:#7986CE;
    font-size:15px;
` 

