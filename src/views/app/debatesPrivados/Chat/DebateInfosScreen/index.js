import React from 'react';
import { View } from 'react-native';
import UserAvatar from "@muhzi/react-native-user-avatar";
import { Container } from './styles';

const DebateInfosScreen = () => {
    return <Container>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30, marginBottom: 10 }}>Debate</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <UserAvatar
                    userName="John Samuel"
                    size={60}
                    backgroundColor="#0be881"
                    src="https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg"
                />
                <Text style={{ textAlign: 'center' }}>Thiago André</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <UserAvatar
                    userName="John Samuel"
                    size={60}
                    backgroundColor="#0be881"
                    src="https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg"
                />
                <Text style={{ textAlign: 'center' }}>Gustavo Oliveira</Text>
            </View>

        </View>
        <Text>Tema:</Text>
        <Text>Drogas deveriam ser legalizadas? qual a sua opniao?</Text>

    </Container>;
}

export default DebateInfosScreen;