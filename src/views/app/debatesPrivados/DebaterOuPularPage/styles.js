import styled from 'styled-components/native';


export const Container = styled.View`
    padding:0 15px;
`;

export const CardWrapper = styled.View`
    margin: 15px 0 0 0; 
`

export const UserImage = styled.Image`
    align-self: center;
    margin: 5px 0 0 0;
`;

export const Text = styled.Text`
    align-self: center;
    margin:15px 0 0 0;
    font-size:${props=> `${props.FontSize}px`};
`;

export const CoordenadasImage = styled.Image`
    width:180px;
    height:180px;
    align-self:center;
    margin:10px 0 0 0;
    resize-mode:contain;
`;

export const ButtonContainer = styled.View`
    flex-direction:row;
    margin:30px 0;
    justify-content:space-around;
    padding: 0 30px;
`
export const Button = styled.TouchableOpacity`
    border-color:white;
    background-color:#6B84C5;
    flex:1;
    padding: 10px 0;
    border-radius:4px;
`
export const TxtButton = styled.Text`
    text-align:center;
    color:white
`
