import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default props => {
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    return (
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <View style={{ flexDirection: 'row', width: '50%' }}>
                <CheckBox
                    color="#9387DF"
                    disabled={false}
                    value={checked}
                    onValueChange={() => setChecked(!checked)}
                />
                <View style={{ justifyContent: 'center' }}>
                    <Text>{props.topico1}</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', width: '50%' }}>
                <CheckBox
                    color="#9387DF"
                    disabled={false}
                    value={checked2}
                    onValueChange={() => setChecked2(!checked2)}
                />
                <View style={{ justifyContent: 'center' }}>
                    <Text>{props.topico2}</Text>
                </View>
            </View>


        </View>
    )
}
