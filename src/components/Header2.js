import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import UserAvatar from "@muhzi/react-native-user-avatar";
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default props => {
  const navigation = useNavigation();
  return <View style={styles.header}>
  <View style={styles.headerInner}>
    <TouchableOpacity onPress={()=>{navigation.navigate("MeuPerfil")}}>
    <Image source={require('../../assets/users/foto-default.png')} style={styles.userImage} />
    </TouchableOpacity>
    <Text style={styles.inicioTxt}>{props.title}</Text>
  </View>
</View>
}

const styles = StyleSheet.create({
    header: {
      height:hp('6.8%'),
      justifyContent:'center',
        backgroundColor: '#7c99e2',
        paddingLeft:wp('3%'),
      },
      headerInner: {
        flexDirection: 'row',
        alignItems:'center',
      },
      inicioTxt: {
        alignSelf: 'center',
        fontSize: hp('2.7%'),
        marginLeft: 10,
        color:'white',
        fontFamily:'sans-serif-medium'
      },
      userImage:{
        width:hp('4.7%'),
        height:hp('4.7%'),
        borderRadius:hp('2.45%'),
      }
})
