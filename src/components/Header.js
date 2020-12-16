import React from 'react';
import { View, Text, Image } from 'react-native';

export default props => {
    return <View style={{
        flexDirection: 'row',
        marginTop: '10%',
        marginBottom: props.mb || 0
    }}>
        <Image style={{resizeMode: 'contain',marginRight:10}} source={require('../../assets/icon3.png')} />
        <View style={{ justifyContent: 'center' }}>
            <Text style={{ fontSize: 25, color: 'gray' }}>DEBATE PLACE</Text>
        </View>
    </View>
}
