import React from 'react';
import { SafeAreaView } from 'react-native';
import Stack from './Stack'
import {NavigationContainer} from '@react-navigation/native'
import Tab from './BottomTab'
export default props => {
  return <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
       </SafeAreaView>;
}
