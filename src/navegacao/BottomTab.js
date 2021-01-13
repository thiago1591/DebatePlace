import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DebatesPrivados from '../views/app/debatesPrivados/DebaterOuPularPage'
import DebatesPublicos from '../views/app/debatesPublicos/Timeline'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from './HeaderHome'

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator 
    initialRouteName="DebatesPrivados"
    screenOptions={({route}) => ({
      tabBarIcon: ({color,size}) => {
        let iconName
        if(route.name === 'Header') {
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
    activeTintColor:'#7c99e2',
    activeBackgroundColor: '#FFF',
    inactiveBackgroundColor: '#FFF',
    inactiveTintColor:'gray',
    showLabel:false,
    }}>
      <Tab.Screen name="DebatesPublicos" component={DebatesPublicos} />
      <Tab.Screen name="Header" component={Header} />
      <Tab.Screen name="DebatesPrivados" component={DebatesPrivados} />
    </Tab.Navigator>
  );
}