import styled from 'styled-components/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Container = styled.ScrollView`
  background-color:white;
  padding:24px;
  flex:1;
`;

export const Label = styled.Text`
    color: gray;
    font-family: Nunito_600SemiBold;
    margin-bottom: 8px;
`

export const Input = styled.TextInput`
border-width:1.2px;
  border-color: #d3e2e6;
  border-radius:5px;
  height:56px;
  padding: 18px 24px;
  margin-bottom:16px;
`

export const AddImageButton = styled.TouchableOpacity`
    border-style:dashed;
    border-color:#96D2F0;
    border-width:1.4px;
    border-radius:5px;
    height:56px;
    justify-content:center;
    align-items:center;
    margin-bottom:32px;
`


export const Button = styled.TouchableOpacity`
    width:97%;
    height:${`${hp('6%')}px`};
    background-color:#7c99e2;
    justify-content:center;
    border-radius:2px;
    margin:10px;
    align-self: center;
`

export const TxtButton = styled.Text`
    text-align:center;
    color:white;
    font-family:sans-serif-medium;
    font-size:${`${hp('2.6%')}px`}
`

export const Title = styled.Text`
    text-align:center;
    font-family:sans-serif-medium;
    font-size:${`${hp('2.6%')}px`};
    margin-bottom:15px;
`

export const BtnExemplo = styled.TouchableOpacity`
  border-width:1px;
  border-radius:20px;
  border-color:gray;
  align-self: flex-end;
  padding:5px;
  margin-bottom:15px;
`


