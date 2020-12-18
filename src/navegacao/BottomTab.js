import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../views/app/Home'
import DebatesPrivados from '../views/app/DebatesPrivados'
import DebatesPublicos from '../views/app/DebatesPublicos'
const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from './HeaderTab'
import { Title } from 'react-native-paper';


export default function BottomTab() {
  return (
    <Tab.Navigator 
    initialRouteName="Home"
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
        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}
    tabBarOptions={{activeTintColor:'#9387DF',
    activeBackgroundColor: '#F1F1F1',
    inactiveBackgroundColor: '#F1F1F1',
    barStyle: {
      borderWidth: 0.5,
      borderTopColor: '#000',
      shadowColor: "#000000",
      shadowOpacity: 1,
      shadowRadius: 30,
      shadowOffset: {
          height: 10,
          width: 10
      },
      elevation: 5
  },
    inactiveTintColor:'gray',labelStyle:{fontSize:14},
    labelStyle:{
      margin:2
    }
    }}>
      <Tab.Screen name="DebatesPublicos" component={DebatesPublicos} />
      <Tab.Screen options={{title:"Home"}} name="Header" component={Header} />
      <Tab.Screen name="DebatesPrivados" component={DebatesPrivados} />
    </Tab.Navigator>
  );
}