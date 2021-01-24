import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const Container = styled.ScrollView`
  background-color:white;
  padding:12px 24px 24px 24px;
  flex:1;
`;

export const Header = styled.View`
    flex-direction:row;
    height:${`${hp('6.8%')}px`};
    align-items:center;
    background-color: #7c99e2;
    padding-right:${`${wp('3%')}px`};
    justify-content:flex-end;
`
export const TxtHeader = styled.Text`
    color:white;
`

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
  height:${`${hp('16%')}px`};
`

export const Capa = styled.TouchableOpacity`
    border-style:dashed;
    border-color:#96D2F0;
    border-width:1.4px;
    border-radius:5px;
    height:${`${hp('16%')}px`};
    justify-content:center;
    align-items:center;
`

export const UserImage = styled.Image`
    height:${`${hp('8%')}px`};
    width:${`${hp('8%')}px`};
    border-radius:${`${hp('4%')}px`};
    border-width:2px;
    margin-top:${`-${hp('9%')}px`};
    margin-left:${`${hp('2%')}px`};
    border-width:1.5px;
    border-color:white;
`

export const VisaoContainer = styled.View`
margin-top:${`${hp('4%')}px`};
`

export const InteresseContainer = styled.View`
    margin-bottom:10px
`

export const BtnExemplos = styled.TouchableOpacity`
    border-width:1px;
    border-color:#d3e2e6;
    padding:6px;
    align-self:flex-end;
    border-radius:10px;
    margin-bottom:5px;
    margin-top:-5px
`
export const TxtBtnInteresses = styled.Text`
    color:gray;
    font-size:13px
`
export const CoordenadasImage = styled.Image`
align-self:center;
    height:${`${hp('15%')}px`};
    width:${`${hp('15%')}px`};
    margin: ${`${hp('1.2%')}px`};
`

export const ButtonsContainer = styled.View`
    align-self: center;
    margin-bottom:10px;
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