import React,{useState} from 'react';
import { View,ScrollView,TextInput} from 'react-native';
import InteressesList from '../../../../components/InteressesList'
import { useNavigation } from '@react-navigation/native';

import { Container, UserImage, TxtTopic, TxtName, UserImageContainer,InteressesContainer,Input,Button,TxtButton} from './styles';


const EscolherTemaDebate = () => {
    const navigation = useNavigation();
    const [tema,setTema] = useState("")
    let showM
    return <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
       <View style={{flex:1}}>
       <UserImageContainer>
            <UserImage source={require('../../../../../assets/users/elon.jpg')} />
            <TxtName>Elon Musk</TxtName>
        </UserImageContainer>
    <InteressesContainer>
    <TxtTopic>Temas que interessam Thiago:</TxtTopic>
        <InteressesList />
    </InteressesContainer>
       </View>

       <View style={{flex:1,marginLeft:20}}>
       <UserImageContainer>
            <UserImage source={require('../../../../../assets/users/bill.jpg')} />
            <TxtName>Bill Gates</TxtName>
        </UserImageContainer>


    <InteressesContainer>
    <TxtTopic>Temas que interessam você:</TxtTopic>
        <InteressesList />
    </InteressesContainer>
       </View>
        </View>
        
        <View>
        <TxtTopic>Digite abaixo um tema que deseja debater:</TxtTopic>
        <Input value={tema} onChangeText={(text) => setTema(text) } mode="outlined" maxLength={45} />
        </View>
        <Button onPress={() => {
             showM=true
             navigation.navigate('BottomTab',{screen:'DebatesPrivados',params:{showM: true}}) }}>
            <TxtButton>Chamar para debate</TxtButton></Button>
        </ScrollView>
    </Container>


}

export default EscolherTemaDebate;