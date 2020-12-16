import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styleGeral from './estilo'
import { useNavigation } from '@react-navigation/native';

export default props => {
    const navigation = useNavigation();
    return <>
        {props.avancar ?
            <TouchableOpacity
                style={styleGeral.btn}
                onPress={() => { navigation.navigate(props.avancar) }}>
                {props.nome ?
                    <Text style={{ color: '#FFF' }}>{props.nome}</Text>
                    : false}
            </TouchableOpacity> : false}
            </>;
        }
