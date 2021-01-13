import React from 'react';
import Header from '../../../../components/Header2'
import { useNavigation } from '@react-navigation/native';
import InteressesList from '../../../../components/InteressesList'
import { Card } from 'react-native-paper';
import { Container, CardWrapper, UserImage, Text, CoordenadasImage, ButtonContainer, Button, TxtButton} from './styles';


const DebaterOuPularPage = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header title="Debates Privados"/>

      <Container>
        <CardWrapper>
          <Card style={{padding:15}}>

            <UserImage source={require('../../../../../assets/foto-default.png')} />
            <Text FontSize={18}>Thiago André</Text>
            <Text FontSize={15}>Na minha opnião o livre mercado, atraves de seus incentivos pragmaticos é capaz de atender as demandas e consequentementes suprir as necessidades da população por meio do incentivo do lucro</Text>

            <InteressesList />

            <CoordenadasImage source={require('../../../../../assets/coordenadas.jpg')} />
          </Card>
        </CardWrapper>
      </Container>

      <ButtonContainer>
        <Button>
          <TxtButton>Pular</TxtButton>
        </Button>

        <Button>
          <TxtButton>Debater</TxtButton>
        </Button>
      </ButtonContainer>
    </>
  )
}

export default DebaterOuPularPage;