import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { View, Button } from 'react-native'
import Welcome from '../views/Welcome'
import MeusDebatesPublicos from '../views/app/MeusDebatesPublicos'
import MeusDebatesPrivados from '../views/app/MeusDebatesPrivados'
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserAvatar from "@muhzi/react-native-user-avatar";

const Stack = createStackNavigator()

export default props => {
    return <Stack.Navigator
        initialRouteName="MeusDebatesPublicos"
        screenOptions={{
            headerStyle: {
                backgroundColor: '#6B84C5',
            },
            headerTitleStyle: {
                fontSize: 15
            }
        }}>
        <Stack.Screen options={{
            title: "DEBATE PLACE",
            headerTitleStyle: { color: "white" },
            headerRight: () => (
                <View style={{ paddingRight: 10,flexDirection:'row' }}>
                    <UserAvatar
                        userName="John Samuel"
                        size={30}
                        backgroundColor="#0be881"
                        src="https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg"
                    />
                    <Ionicons style={{marginLeft:15}} name="settings-outline" size={25} color="white" />
                </View>
            ),
            headerLeft: () => { return null }
        }}
            name="MeusDebatesPublicos"
            component={MeusDebatesPublicos} />
        <Stack.Screen options={{ headerLeft: () => { return null } }} name="MeusDebatesPrivados" component={MeusDebatesPrivados} />
    </Stack.Navigator>;
}
