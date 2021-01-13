import React from 'react';
import { SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Tab from './Stack'
import {ThemeProvider} from 'styled-components';
import { SafeAreaProvider,  initialWindowMetrics } from 'react-native-safe-area-context'

const cores = {
    primary: '#6B84C5'
}

export default props => {
  return <SafeAreaProvider style={{flex:1}} initialMetrics={initialWindowMetrics}>
        <NavigationContainer>
            <ThemeProvider theme={cores}>
              <Tab />
            </ThemeProvider>
        </NavigationContainer>
        </SafeAreaProvider>
}
