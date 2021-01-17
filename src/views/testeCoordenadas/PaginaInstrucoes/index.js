import React from 'react';

import { Container,Title,CoordenadasImage,TxtAviso,TxtTopics,ButtonsContainer,Button,TxtButton} from './styles';

const PaginaInstrucoes = () => {
  return <Container>
      <Title>Coordenadas políticas</Title>
    <CoordenadasImage resizeMode='contain' source={require('../../../../assets/coordenadas.jpg')} />
    <TxtAviso>O espectro político é importante dentro do app pois, apesar de não ser capaz de definir sua visão de mundo, permite que outros usuarios tenham uma rápida ideia do seu posicionamento.</TxtAviso>
    <TxtTopics>Escolha uma opção para prosseguir:</TxtTopics>

    <ButtonsContainer>
                <Button onPress={() => { navigation.navigate("TesteView") }}>
                    <TxtButton>Fazer teste</TxtButton>
                </Button>

                <Button>
                    <TxtButton>Escolher minhas coordenadas </TxtButton>
                </Button>

                <Button onPress={()=>{}}>
                    <TxtButton>Não me indetifico no espectro ou prefiro escolher mais tarde</TxtButton>
                </Button>
            </ButtonsContainer>
  </Container>
}

export default PaginaInstrucoes;