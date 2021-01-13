import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import UserAvatar from "@muhzi/react-native-user-avatar";
import { useNavigation } from '@react-navigation/native';

export default props => {
  const navigation = useNavigation();
  return <View style={styles.header}>
  <View style={styles.headerInner}>
    <TouchableOpacity onPress={()=>{navigation.navigate("MeuPerfil")}}>
    <UserAvatar
      size={35}
      backgroundColor="#0be881"
      src="https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg"
    />
    </TouchableOpacity>
    <Text style={styles.inicioTxt}>{props.title}</Text>
  </View>
</View>
}

const styles = StyleSheet.create({
    header: {
        paddingVertical:10,
        backgroundColor: '#7c99e2',
        marginBottom: 5,
        paddingLeft:10
      },
      headerInner: {
        flexDirection: 'row',
        
      },
      inicioTxt: {
        alignSelf: 'center',
        fontSize: 20,
        marginLeft: 10,
        color:'white',
        fontFamily:'sans-serif-medium'
      },
})
