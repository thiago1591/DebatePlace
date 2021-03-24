import React from 'react';
import {View} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import {StyleSheet,TouchableOpacity,Image } from 'react-native'
import DebatesPrivados from '../../views/app/debatesPrivados/DebaterOuPularPage'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from '../../components/HeaderTeste'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Stack = createStackNavigator()

export default props => {
    return <Stack.Navigator
        initialRouteName="DebatesPrivados"
        screenOptions={{
            headerStyle: {
                backgroundColor: '#7c99e2',
            },
            headerTitleStyle: {
                fontSize: 15
            }
        }}>
        <Stack.Screen options={{
            title: "",
            headerLeft: () => (
                <Header  title="Debates Privados" page="home" />
            ),
            headerRight: () => { return <View style={{marginRight:10,flexDirection:'row'}}>
            <Icon name="notifications" color="white" size={28} />
            <Icon style={{marginLeft:15}} name="filter-alt" color="white" size={28} />
          </View> }
        }}
            name="Debates Privados "
            component={DebatesPrivados} />
    </Stack.Navigator>;
}

const styles = StyleSheet.create({
    header: {
        paddingVertical:hp('1.2%'),
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