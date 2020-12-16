import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../views/app/Home'
import DebatesPrivados from '../views/app/DebatesPrivados'
import DebatesPublicos from '../views/app/DebatesPublicos'
const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function BottomTab() {
  return (
    <Tab.Navigator 
    initialRouteName="Home"
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
        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}
    tabBarOptions={{activeTintColor:'#9387DF',
    inactiveTintColor:'gray',labelStyle:{fontSize:14},
    labelStyle:{
      margin:2
    }
    }}>
      <Tab.Screen name="DebatesPublicos" component={DebatesPublicos} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="DebatesPrivados" component={DebatesPrivados} />
    </Tab.Navigator>
  );
}