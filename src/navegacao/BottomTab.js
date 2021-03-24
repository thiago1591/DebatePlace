import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DebatesPrivados from '../navegacao/headers/HeaderDebatesPrivados'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './headers/HeaderHome'
import DebatesPublicos from './headers/HeaderDebatesPublicos'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator 
    initialRouteName="HeaderDebatesPublicos"
    screenOptions={({route}) => ({
      tabBarIcon: ({color,size}) => {
        let iconName
        if(route.name === 'Home') {
          iconName = 'home'
        }
        else if(route.name === 'DebatesPrivados') {
          iconName = 'people'
        }
        else if(route.name === 'DebatesPublicos') {
          iconName = 'globe-outline'
        }
        return <Ionicons name={iconName} size={30} color={color} />;
      }
    })}
    tabBarOptions={{
      style:{height:hp('7%')},
    activeTintColor:'#7c99e2',
    activeBackgroundColor: '#FFF',
    inactiveBackgroundColor: '#FFF',
    inactiveTintColor:'gray',
    showLabel:false,
    }}>
      <Tab.Screen name="DebatesPublicos" component={DebatesPublicos} />
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="DebatesPrivados" component={DebatesPrivados} />
    </Tab.Navigator>
  );
}