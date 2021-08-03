import styled from 'styled-components/native';

export const Container = styled.View`
    margin-bottom:10px;
`;

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
    color:gray;
`

export const InfosContainer = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:flex-end;
`
export const InfoContainer = styled.View`
    flex-direction:row;
    margin-left:5px;
    margin: 10px 0;
    align-self: flex-start;
`

export const TextInfo = styled.Text`
    margin-left:4px;
    color:gray;
`
