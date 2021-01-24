import styled from 'styled-components/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Card} from 'react-native-paper'

export const Container = styled.View`
  padding:6px
`;

export const CardComponent = styled(Card)`
    flex-direction:row;
    padding:10px 5px;
    margin-bottom:4px;
    background-color:${props => props.isRead ? '#e7f3ff' : 'white' }
`

export const UserName = styled.Text`
    font-weight:bold;
    font-size:16px;
    margin-right:5px
`

export const MidContainer = styled.View`
    
`

export const InnerContainer = styled.View`
    flex-direction:row;
    margin-right:5px;
`

export const DateTxt = styled.Text`
    color:gray;
    font-size:14px
`
export const Avatar = styled.Image`
    width:${`${hp('4.7%')}px`};
    height:${`${hp('4.7')}px`};
    border-radius:${`${hp('2.35%')}px`};
    margin-right:5px;
`


export const NotifTxt = styled.Text`
    color: #4a4847
`