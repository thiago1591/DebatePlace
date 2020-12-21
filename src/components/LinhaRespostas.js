import React from 'react';
import { View, Text } from 'react-native';


export default props => {
    return <View style={{ flexDirection: 'row' }}>

        <View style={{ flex: 1, height: 20 }}>
            <View style={{ height: 10, borderBottomWidth: 1, borderBottomColor: 'black', }}></View>
        </View>

        <View style={{ flex: 1, height: 20 }}>
            <Text style={{ textAlign: 'center' }}>respostas</Text>
        </View>

        <View style={{ flex: 1, height: 20 }}>
            <View style={{ height: 10, borderBottomWidth: 1, borderBottomColor: 'black', }}></View>
        </View>
    </View>
}
