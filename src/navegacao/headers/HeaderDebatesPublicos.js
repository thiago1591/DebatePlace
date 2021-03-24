import React from 'react';
import {View} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import DebatesPublicos from '../../views/app/debatesPublicos/Timeline'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Header from '../../components/HeaderTeste'

const Stack = createStackNavigator()

export default props => {
    return <Stack.Navigator
        initialRouteName="DebatesPublicos"
        screenOptions={{
            headerStyle: {
                backgroundColor: '#7c99e2',
            },
            headerTitleStyle: {
                fontSize: 15
            }
        }}>
        <Stack.Screen 
            options={{
            title: "",
            headerLeft: () => (
                <Header  title="Debates Privados" page="home" />
            ), headerRight: () => (<View style={{  marginRight:10,flexDirection:'row'}}>
            <Icon name="notifications" color="white" size={28} />
            <Icon style={{marginLeft:15}} name="search" color="white" size={28} />
          </View>)
            
        }}
        
            name="Debates Publicos"
            component={DebatesPublicos} />
    </Stack.Navigator>;
}
