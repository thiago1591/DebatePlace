import React from 'react';
import { View, Text,Image,StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default props => {
    const navigation = useNavigation();
    return <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.txtCoordenadas}>Coordenadas politicas</Text>
            <Image style={styles.img} source={require('../../../assets/coordenadas.jpg')} />
        </View>
       <View style={{marginBottom:15}}>
       <Text style={{fontSize:16}}>O espectro político enquadra sua posição nas escalas politicas e economicas. Ele é importante dentro do App pois, apesar de não ser capaz de definir sua visão de mundo, permite que outros usuarios tenham uma rápida ideia do seu posicionamento.</Text>
        <Text  style={{fontSize:16,marginTop:5}}>Escolha uma opção para prosseguir:</Text>
       </View>
        <TouchableOpacity 
        onPress={()=>{navigation.navigate("TesteView")}}
        style={styles.btn}>
          <Text style={styles.txtBtn}>
          Fazer teste de 5 minutos
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>
          Escolher minhas coordenadas
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>
          Não me indetifico no espectro ou prefiro escolher mais tarde
        </Text>
        </TouchableOpacity>
    </View>;
}

const styles = StyleSheet.create({
    container:{
        padding:15,
        backgroundColor:'white',
        flex:1
    },
    txtCoordenadas:{
        fontSize:20,
        fontWeight:'bold'
    },
    img:{
        width: 200,
         height: 200, 
         alignSelf: 'center',
         marginTop: 10, 
         resizeMode: 'contain',
    },
    btn: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#D9DCEC',
        alignSelf: 'center',
        padding: 10,
        width:'100%',
        marginTop:10
      },
      txtBtn: {
        fontWeight: 'bold',
        color: '#7986CE',
        fontSize: 15
      },
})
