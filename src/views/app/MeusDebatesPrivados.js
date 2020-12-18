import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Botao from '../../components/Botao'

export default props => {
    return <View style={styles.container}>
       
        

    </View>;
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    header: {
        marginTop: '25%'
    },
    texto: {
        fontSize: 35,
        color: 'black',
        fontWeight: 'bold'
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 19
    },
    btnExemplos: {
        backgroundColor:'#B6AEE5',
        padding: 10,
        alignSelf: 'flex-start',
    },
})


