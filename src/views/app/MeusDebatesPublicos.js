import React from 'react';
import { Text, View, StyleSheet,FlatList } from 'react-native';
import Botao from '../../components/Botao'
import ChatListItem from '../../components/ComponenteMeusDebatesPublicos'


export default props => {
    const array = [1,2,3,4,5,6,7,8,9,10]
    return <View style={styles.container}>
       <FlatList
       showsVerticalScrollIndicator={false}
        data={array}
        renderItem={() => <ChatListItem />}
        keyExtractor={(index) => index.toString()}
        />
    </View>;
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop:10
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


