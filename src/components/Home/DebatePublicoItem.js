import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import UserAvatar from "@muhzi/react-native-user-avatar";
import { Card} from 'react-native-paper';


export default props => {
    let menssagem = "postado dia 27 de novembro"
    let menssagem2 = "respondido dia 27 de novembro"
    return (
        <Card style={{padding:5,marginBottom:10}}>
            <View style={styles.container}>
            <View style={styles.containerLeft}>
                <UserAvatar
                    userName="John Samuel"
                    size={40}
                    backgroundColor="#0be881"
                    src="https://s.france24.com/media/display/b92cfa72-e8c3-11ea-bcb5-005056bff430/w:1280/p:16x9/2020-08-27T181728Z_711309918_RC2IMI9O4SSL_RTRMADP_3_USA-ELECTION-BIDEN.webp"
                />
                <View style={styles.midContainer}>
                
                    <Text style={styles.username}>Biden</Text>
                    <Text style={styles.lastMessage} numberOfLines={1}>
                        {menssagem.length < 35
                            ? `${menssagem}`
                            : `${menssagem.substring(0, 32)}...`}
                    </Text>
                    
                </View>         
            </View>
            <Text style={styles.time}>Ontem</Text>
        </View>
        <Text style={{fontSize:18}}>Sai daqui bixo</Text>
        <Text style={{fontSize:16,paddingBottom:10,color:'gray'}}>Bora já perdeu, passa a casa branca ae e deixa eu assumir logo Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
       
        
        </Card>
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
        justifyContent: 'space-around',
        marginLeft: 10
    },
    containerResposta:{
        borderTopWidth:0.3,
        borderTopColor:'#E4CCCC',
        flexDirection: 'row',
        paddingTop:10,
        paddingBottom:2
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