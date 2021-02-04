import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import TopNavigation from './TopNavigationHome'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from '../../components/HeaderTeste'

const Stack = createStackNavigator()


//Essa Stack é responsavel apenas por incluir um estilo de header acima do header do TopNavigation, na pagina Home
export default props => {
    return <Stack.Navigator
        initialRouteName="TopNavigation"
        screenOptions={{
            headerStyle: {
                backgroundColor: '#7c99e2',
                shadowOpacity:0,
                elevation:0
            },
            headerTitleStyle: {
                fontSize: 15
            }
        }}>
        <Stack.Screen options={{
            title: "",
            headerLeft: () => (
                <Header  title="Debates Ativos" page="home" />
            ),
            headerRight: () => { return <Ionicons style={{marginRight:10}} name="settings-outline" size={25} color="white" /> }
        }}
            name="TopNavigation"
            component={TopNavigation} />
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