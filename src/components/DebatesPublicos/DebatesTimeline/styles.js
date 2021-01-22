import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom:10px;
`;



export const UserInfoContainer = styled.View`
    flex-direction:row;
`
export const UserName = styled.Text`
    margin-left:10px;
    align-self: center;
    font-family:sans-serif-medium;
`
export const Title = styled.Text`
    margin:10px 0;
    text-align:center;
    font-size:18px;
    font-family:sans-serif-medium;
`

export const Message = styled.Text`
    font-size:14px;
    color:#4c4f4e;
    margin-bottom:5px
`

export const AnswerContainer = styled.View`

`

export const ActionContainer = styled.View`
    flex-direction:row;
    justify-content:space-between;
    border-top-color:#E5E5E5;
    border-top-width:1px;
`

export const Button = styled.TouchableOpacity`
    flex:1;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding:10px 0;
`
export const TxtButton = styled.Text`
    text-align:center;
    margin-left:${props => `${props.margin}px`};
    color:gray
`
