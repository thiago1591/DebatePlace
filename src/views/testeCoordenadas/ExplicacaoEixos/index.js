import React from 'react';

import { Container, Title, TxtTopics, EixosContainer, Text, Button, TxtButton, ButtonContainer, ScrollView } from './styles';

const ExplicacaoEixos = () => {
    return <>
     <Container>
        <ScrollView>
            <Title>Explicação Eixos</Title>

            <EixosContainer>
                <TxtTopics>Eixo Esquerda-direita:</TxtTopics>
                <Text>O eixo esquerda-direita tem o objetivo de medir a posição economica do usuário. Enquanto a Esquerda defende a interferencia do Estado na economia, visto que falhas de mercado são mais graves que falhas de Estado, a Direita defende que falhas de Estado são um problema maior, e portanto, o mercado deveria ter uma menor interferencia.</Text>
            </EixosContainer>

            <EixosContainer>
                <TxtTopics>Eixo Comunitarista-liberal:</TxtTopics>
                <Text>Esse eixo mede não as liberdades economicas, mas as liberdades individuais. Os liberais acreditam que a liberdade humana é fundamental e, portanto, toda autoridade vem do individuo. As pessoas devem ter o direito de tomar as decisoes que acharem melhores desde que não prejudiquem outro individuo. Por outro lado, os Comunitaristas defendem que a crença no individualismo não garante o bem comum da sociedade e, portanto, a solução deve partir de uma visão comunitaria.</Text>
            </EixosContainer>
            <Text>*Talvez transformar essa pagina em um alert gerado por um botao na pag de EscolherCoordendas*</Text>
        </ScrollView>

    </Container>

    <ButtonContainer>
                <Button>
                    <TxtButton>Entendi</TxtButton>
                </Button>
            </ButtonContainer>

</>
    
}

export default ExplicacaoEixos;