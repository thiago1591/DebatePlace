import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import UserAvatar from "@muhzi/react-native-user-avatar";
import { Card } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

export default ({ debate }) => {
    const [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        if (Object.keys(debate).length !== 0) {
            setIsLoad(true)
        }
        console.log(debate)
    }, [debate])

    return (
        <Card style={{paddingLeft: 6, paddingRight: 6, marginBottom: 8 }}>
            <View style={styles.userInfo}>

                <ShimmerPlaceHolder
                    shimmerStyle={styles.userAvatarLoading}
                    LinearGradient={LinearGradient}
                    autoRun={true}
                    visible={isLoad}>
                    <UserAvatar userName="John Samuel" size={40} backgroundColor="#0be881"
                        src={debate.imagem}
                    />
                </ShimmerPlaceHolder>

                <ShimmerPlaceHolder
                    shimmerStyle={styles.titleLoading}
                    LinearGradient={LinearGradient}
                    autoRun={true}
                    visible={isLoad}>
                    <Text style={styles.username}>{debate.nome}</Text>
                </ShimmerPlaceHolder>
            </View>


            <ShimmerPlaceHolder
                shimmerStyle={styles.titleLoading}
                shimmerStyle={styles.answerLoading}
                LinearGradient={LinearGradient}
                autoRun={true}
                visible={isLoad}>
                <Text style={{ fontSize: 17, fontFamily: 'sans-serif-medium' }}>{debate.titulo}</Text>
                <Text style={{ fontSize: 15, paddingBottom: 10, color: 'black' }}>{debate.mensagem}</Text>
            </ShimmerPlaceHolder>

        </Card>

    )
}

const styles = StyleSheet.create({
    userInfo: {
        marginVertical: 10,
        flexDirection: 'row',
        width: '100%',
    },
    containerLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    username: {
        fontSize: 15,
        marginLeft: 10,
        fontFamily: 'sans-serif-medium'
    },
    lastMessage: {
        fontSize: 14,
        color: 'gray',
    },
    time: {
        fontSize: 13,
        color: 'gray',
        textAlign: 'right',
        flex: 1,
    },
    userAvatarLoading: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    userNameLoading: {
        alignSelf: 'center',
        marginLeft: 15,
        width: '40%',
        height: 10
    },
    titleLoading: {
        marginTop: 10,
        height: 10,
        marginLeft: 10,
    },
    answerLoading: {
        width: '100%',
        height: 10,
        marginBottom: 10,
        marginTop: 50
    }
})
