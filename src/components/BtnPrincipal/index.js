import React from 'react';
import { Button,TxtButton } from './styles';

export default props => {
  return (
    <Button onPress={() => {
        navigation.navigate(props.navegar) }}>
       <TxtButton>{props.title}</TxtButton></Button>
    )
}
