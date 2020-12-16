import React from 'react';
import { Text, ImageBackground ,StyleSheet,View,Button} from 'react-native';


export default props => {
    return <ImageBackground
        source={require('../../assets/background-welcome.png')}
        style={{ width: '100%', height: '100%' }}>
         <View style={{flex:10}}>
          <Text style={style.titulo}>Debate Place</Text>
          <Text style={style.sub_titulo}>Um lugar para debater</Text>
       </View>
 
      <View style={style.botao}>
       <Button 
            title='Avançar' 
            onPress={() => props.navigation.navigate('Avisos')}
            /> 
       </View>
       
    </ImageBackground>;
}

const style = StyleSheet.create({
    titulo: {
        textAlign:'center',
        fontSize:50,
        fontFamily:'',
        marginTop:'15%',
        color:'#FFF',
        fontWeight:'bold'
      },
      sub_titulo: {
        textAlign:'center',
        fontSize:20,
        fontFamily:'',
        color:'#FFF',
      },
      botao:{
       flex:1,
       width:'70%',
       height:'20%',
       alignSelf:'center'
      }
})