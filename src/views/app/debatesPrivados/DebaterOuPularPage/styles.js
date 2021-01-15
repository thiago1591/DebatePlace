import styled from 'styled-components/native';
import {Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


var screenWidth = Dimensions.get('window').width;
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
    margin-bottom:${`${hp('1.6%')}px`};
    flex:10
`

export const UserImage = styled.Image`
    align-self: center;
    height:${`${hp('11%')}px`};
    width:${`${hp('11%')}px`};
    border-radius:${`${hp('6.25%')}px`};
    border-width:2px;
`;

export const Text = styled.Text`
    align-self: center;
    margin:0 0 0 0;
    font-size:${props=> `${props.FontSize}px`};
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
    font-size:${`${hp('2.1%')}px`};;
`

export const VisaoContainer = styled.View`
    border-top-width:1px;
    border-top-color: #f0e7e6;
    border-bottom-width:1px;
    border-bottom-color: #f0e7e6;
    padding:${`${hp('1%')}px`} 0;
    justify-content:center;
    flex:10;
    margin-bottom:10px
`

export const CoordenadasImage = styled.Image`
    align-self:center;
    height:${`${hp('22%')}px`};
    width:${`${hp('22%')}px`};
    margin-top:${`${hp('1%')}px`}
`;

export const ButtonContainer = styled.View`
    flex-direction:row;
    margin:${`${hp('0.7%')}px`} ${`${hp('0.7%')}px`};
    justify-content:center
`
export const Button = styled.TouchableOpacity`
    border-color:white;
    border-radius:${`${hp('2.5%')}px`};
    margin:0 ${`${hp('1%')}px`};
    height:${`${hp('6%')}px`};
    justify-content:center;
    width: ${`${wp('35%')}px`};
    
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
    background-color:#7c99e2;

`









const capaHeight = 30 * Dimensions.get('window').height / 100

export const ScrollView = styled.ScrollView`
  background-color:white;
`;

export const Capa = styled.ImageBackground`
    width:100%;
    height: ${`${capaHeight}px`};
    align-items:center
`
/* Capa,ReturnButton,UserImageContainer2,TxtName2,CardWrapper1,TxtCardTitle,CoordenadasContainer,TxtButton2, CoordenadasImage2 */
export const ReturnButton = styled.TouchableOpacity`
    width:40px;
    height:40px;
    border-radius:20px;
    background-color:white;
    position:absolute;
    left:10px;
    top:10px
`

export const UserImageContainer2 = styled.View`
    flex:1;
    justify-content:flex-end;
`

export const TxtName2 = styled.Text`
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


export const CoordenadasImage2 = styled.Image`
    width:200px;
    height:200px;
    align-self: center;
    margin: 10px 0 0 0;
`

export const ButtonsContainer = styled.View`
    align-self: center;
`

export const Button2 = styled.TouchableOpacity`
    border-radius:4px;
    border-width:1px;
    border-color:#D9DCEC;
    align-self: center;
    padding:10px;
    margin-bottom:10px
`

export const TxtButton2 = styled.Text`
    font-weight:bold;
    color:#7986CE;
    font-size:15px;
` 

