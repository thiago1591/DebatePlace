import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import UserAvatar from "@muhzi/react-native-user-avatar";

export default props => {
    let menssagem = "Menssagem de teste opa opa opa"
    return (
        <View style={styles.container}>
            <View style={styles.containerLeft}>
                <UserAvatar

                    userName="John Samuel"
                    size={50}
                    backgroundColor="#0be881"
                    src="https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg"
                />
                <View style={styles.midContainer}>
                    <Text style={styles.username}>Thiago</Text>
                    <Text style={styles.lastMessage} numberOfLines={1}>
                        {menssagem.length < 35
                            ? `${menssagem}`
                            : `${menssagem.substring(0, 32)}...`}
                    </Text>
                </View>
            </View>
            <Text style={styles.time}>Ontem</Text>
        </View>
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
    },
    midContainer: {
        justifyContent: 'space-between',
        marginLeft: 10
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16
    },
    lastMessage: {
        fontSize: 14,
        color: 'gray',
    },
    time: {
        fontSize: 14,
        color: 'gray'
    }
})