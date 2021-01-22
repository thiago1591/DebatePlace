import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import UserAvatar from "@muhzi/react-native-user-avatar";
import LinhaRespostas from './LinhaRespostas'
import { Card} from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default props => {
    return <Card style={styles.container}>

        <View style={styles.autorDebate}>
            <UserAvatar
                size={30}
                backgroundColor="#0be881"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/672px-Aristotle_Altemps_Inv8575.jpg"
            />
            <Text style={{ marginLeft: 10, alignSelf: 'center' }}>Aristóteles Gomes</Text>
        </View>

            <Text style={styles.titulo}>Liberalismo é realmente o único sistema bom?</Text>
            <Text style={styles.menssagemInicial}>Envolvidos tambem pelo contexto Humanista Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</Text>
            <View style={{ justifyContent: 'center', flex: 1 }}>
                <Image style={styles.image} source={require('../../assets/users/bill.jpg')} />
            </View>
        
       
    </Card>;
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom:10
    },
    autorDebate: {
        flexDirection: 'row',
    },
    titulo: {
        marginVertical: 10,
        textAlign: 'center',
        fontSize: 18
    },
    menssagemInicial: {
        fontSize: 14,
        color: 'gray',
        marginBottom:5
    },
    circulo: {
        borderRadius: 5,
        width: 6,
        height: 6,
        backgroundColor: 'black',
        marginRight: 3
    },
    juntar: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 15
    },
    image:{
        alignSelf:'center',
        width:wp('94%'),
        height:hp('30%'),
    }
})

