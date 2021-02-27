import React, { useState} from 'react';
import { View} from 'react-native';
import { Container, Label, Input,Button, TxtButton, AddImageButton } from './styles';
import Feather from 'react-native-vector-icons/dist/Feather';

import api from '../../../../services/api'
import { useNavigation } from '@react-navigation/native';

const AddDebateTxt = () => {
  const [titulo, setTitulo] = useState('')
  const [mensagem, setMensagem] = useState('')

  const navigation = useNavigation()

  async function handleCreateDebate (){
    const data = {
        'titulo': titulo,
        'autor_id':3,
        'mensagem': mensagem,
        'data': '2021-02-26 18:46:00'
    }
    
    await api.post('debates_publicos', data)
    navigation.navigate('BottomTab')
  }

  return <Container>

     <Label>
       Escolha um título para o debate
     </Label>
      <Input onChangeText={setTitulo}/>
    
 
     <Label >Inicie a discussão sobre o tema</Label>
     <Input
        onChangeText={setMensagem}
        style={ {textAlignVertical: 'top',flex:1}}
        multiline
      />
    
    
     <Button onPress={handleCreateDebate}>
      <TxtButton>Criar debate</TxtButton>
    </Button>

      
    </Container>
    
    


}



export default AddDebateTxt;