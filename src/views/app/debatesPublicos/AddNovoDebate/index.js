import React, { useState} from 'react';
import { ScrollView} from 'react-native';
import { Container, Label, Input,Button, TxtButton, AddImageButton } from './styles';
import Feather from 'react-native-vector-icons/dist/Feather';


const AddDebateTxt = () => {
  const [value, setValue] = useState('')
  return <Container>
      <ScrollView>
      <Label>Escolha um título para o debate</Label>
      <Input
      />

      <Label >Inicie a discussão sobre o tema</Label>
      <Input
        style={ { height: 150, textAlignVertical: 'top' }}
        multiline
      />


      <Label>Imagem (opcional)</Label>
      <AddImageButton>
        <Feather name="plus" size={24} color="#15B6D6" />
      </AddImageButton>
      </ScrollView>

      <Button>
      <TxtButton>Criar debate</TxtButton>
    </Button>
    </Container>
    
    


}



export default AddDebateTxt;