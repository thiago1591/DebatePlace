import React from 'react';
import { View } from 'react-native';

import {MidContainer, InnerContainer, Avatar, UserName, DateTxt, NotifTxt  } from '../styles';

const componente = () => {
  return <View style={{ flexDirection: 'row' }}>

    <Avatar source={require('../../../../../assets/users/bill.jpg')} />

    <MidContainer>
      <InnerContainer>

        <UserName>Thiago</UserName>
        <DateTxt>03 nov 20</DateTxt>
      </InnerContainer>

      <NotifTxt>Começou a seguir você</NotifTxt>
    </MidContainer>

  </View>
  


}

export default componente;