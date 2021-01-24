import React from 'react';
import NotifMessage from './componente'
import { Container,CardComponent } from './styles';

const Notificacao = () => {
  return <Container>
    <CardComponent isRead={true}>
      <NotifMessage/>
    </CardComponent>
    <CardComponent isRead={false}>
      <NotifMessage/>
    </CardComponent>
    <CardComponent isRead={false}>
      <NotifMessage/>
    </CardComponent>
    


  </Container>
}

export default Notificacao;