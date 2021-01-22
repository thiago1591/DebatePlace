import React from 'react';
import { View, Text } from 'react-native';


export default props => {
    return <View style={{ flexDirection: 'row',marginVertical:5 }}>

        <View style={{ flex: 1, height: 20 }}>
            <View style={{ height: 10, borderBottomWidth: 1, borderBottomColor: 'gray', }}></View>
        </View>

        <View style={{ flex: 1, height: 20 }}>
            <Text style={{ textAlign: 'center',color:'gray' }}>respostas</Text>
        </View>

        <View style={{ flex: 1, height: 20 }}>
            <View style={{ height: 10, borderBottomWidth: 1, borderBottomColor: 'gray', }}></View>
        </View>
    </View>
}
