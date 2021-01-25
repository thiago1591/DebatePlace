import styled from 'styled-components/native';

export const Header = styled.View`
    flex-direction:row;
    height:${`${hp('6.8%')}px`};
    align-items:center;
    background-color: #7c99e2;
    padding-right:${`${wp('3%')}px`};
    justify-content:flex-end;
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

export const CoordenadasImage = styled.Image`
align-self:center;
    height:${`${hp('15%')}px`};
    width:${`${hp('15%')}px`};
    margin: ${`${hp('1.2%')}px`};
`



