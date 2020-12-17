import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {View} from 'react-native'
import Welcome from '../views/Welcome'
import MeusDebatesPublicos from '../views/app/MeusDebatesPublicos'
import MeusDebatesPrivados from '../views/app/MeusDebatesPrivados'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator()

export default props => {
  return <Stack.Navigator
         initialRouteName="MeusDebatesPublicos"
        screenOptions={{
            headerStyle:{
            backgroundColor:'#6B84C5',},
            headerTitleStyle:{
                fontSize:15
            }
            }}>
        <Stack.Screen options={{
            headerRight:() => {
                <View>
                    <Ionicons name='home'/>;
                </View>
            },
            headerLeft:() => {return null}}} 
            name ="MeusDebatesPublicos" 
            component={MeusDebatesPublicos} />
        <Stack.Screen options={{headerLeft:() => {return null}}}  name ="MeusDebatesPrivados" component={MeusDebatesPrivados} />
       </Stack.Navigator>;
}
