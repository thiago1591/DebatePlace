import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';

export default props => {
    return <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.texto}>Bom dia, Thiago!</Text>
        </View>

        <View style={{ marginTop: '15%' }}>
            <Text style={styles.bold}>Sua frase do dia:</Text>
            <Text>“Experiência é o nome que cada um dá a seus erros!” </Text>
            <Text>– Oscar Wilde.</Text>
        </View>

    
        
        <View>
            <TouchableOpacity style={styles.btnExemplos}>
                        <Text style={{fontSize:18}}>Meus debates</Text>
                </TouchableOpacity>
        </View>
        

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


