import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, TxtButton } from './styles';

export default props => {
    const navigation = useNavigation();
    return (
    <Button onPress={() => { navigation.navigate(props.navegar) }}>
        <TxtButton>{props.title}</TxtButton>
    </Button>
    )
}