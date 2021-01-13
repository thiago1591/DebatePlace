import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'
import TopNavigation from './TopNavigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserAvatar from "@muhzi/react-native-user-avatar";

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
                <View style={{ paddingLeft: 10,flexDirection:'row' }}>
                    <UserAvatar
                        userName="John Samuel"
                        size={35}
                        backgroundColor="#0be881"
                        src="https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg"
                    />
                    <Text style={{fontSize:20,fontFamily:'sans-serif-medium',color:'white',marginLeft:10,alignSelf:'center'}}>Debates Aceitos</Text>
                </View>
            ),
            headerRight: () => { return <Ionicons style={{marginRight:10}} name="settings-outline" size={25} color="white" /> }
        }}
            name="TopNavigation"
            component={TopNavigation} />
    </Stack.Navigator>;
}
