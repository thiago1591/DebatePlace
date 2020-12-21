import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import UserAvatar from "@muhzi/react-native-user-avatar";



export default props => {
    let menssagem = "Menssagem de teste opa opa opa"
    return (
        <>
        <Text style={{fontSize:16, fontWeight:'bold'}}>Legalização da Maconha</Text>

            <View style={styles.container}>
                
            <View style={styles.containerLeft}>
                <UserAvatar
                    userName="John Samuel"
                    size={50}
                    backgroundColor="#0be881"
                    src="https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg"
                />

                <View style={{flexDirection:'row',flex:1, borderBottomWidth:0.3,
        borderBottomColor:'#E4CCCC',paddingBottom:7}}>
                <View style={styles.midContainer}>
                    <Text style={styles.username}>Thiago</Text>
                    <Text style={styles.lastMessage} numberOfLines={1}>
                        {menssagem.length < 35
                            ? `${menssagem}`
                            : `${menssagem.substring(0, 32)}...`}
                    </Text>
                </View>        
                <Text style={styles.time}>Ontem</Text>
                </View>
                
            </View>
            
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    containerLeft: {
        flexDirection: 'row',
        flex:1,
    },
    midContainer: {
        justifyContent: 'space-around',
        marginLeft: 10,
        paddingBottom:10
    },
    username: {
        fontSize: 16
    },
    lastMessage: {
        fontSize: 14,
        color: 'gray',
    },
    time: {
        fontSize: 13,
        color: 'gray',
        textAlign: 'right',
        flex:1,
    }
})