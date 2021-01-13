import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MeusDebatesPublicos from '../views/app/home/MeusDebatesPublicos'
import MeusDebatesPrivados from '../views/app/home/MeusDebatesPrivados'

const Tab = createMaterialTopTabNavigator();

export default props => {
    return <Tab.Navigator
        tabBarOptions={{
            activeTintColor:'white',
            style:{
                backgroundColor:'#6B84C5'
            },
            indicatorStyle:{
                backgroundColor: 'white'
            },
        }}
        initialRouteName="MeusDebatesPublicos">
        <Tab.Screen
            name="Públicos"
            component={MeusDebatesPublicos} />
        <Tab.Screen
            name="Privados"
            component={MeusDebatesPrivados} />
    </Tab.Navigator>;
}
