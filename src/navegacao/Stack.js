import React from 'react';
import { Text, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from '../views/Welcome'
import EditarPerfil from '../views/app/EditarPerfil'
import EscolherInteresses from '../views/EscolherInteresses'
import IntrucoesTeste from '../views/testeCoordenadas/PaginaTeste'
import PaginaTeste from '../views/testeCoordenadas/PaginaTeste'
import EscolherCoordenadas from '../views/testeCoordenadas/EscolherCoordenadas'
import ExplicacaoEixos from '../views/testeCoordenadas/ExplicacaoEixos'
import MeuPerfil from '../views/app/MeuPerfil'
import BottomTab from './BottomTab'
import MeusDebatesCriados from '../views/app/MeusDebatesCriados'
import EscolherTemaDebate from '../views/app/debatesPrivados/EscolherTemaDebate'
import OutrosPerfis from '../views/app/OutrosPerfis'
import DebateInfosScreen from '../views/app/debatesPrivados/Chat/DebateInfosScreen'
import ChatScreen from '../views/app/debatesPrivados/Chat/ChatScreen'
import AddNovoDebate from '../views/app/debatesPublicos/AddNovoDebate'
import PaginaDebate from '../views/app/debatesPublicos/PaginaDebate'
import Notificacoes from '../views/app/Notificacoes'
import Responder from '../views/app/debatesPublicos/PaginaDebate/Responder/responder'
import RespostasDeUmaResposta from '../views/app/debatesPublicos/PaginaDebate/Responder/respostasDeUmaResposta'
import ResponderResposta from '../views/app/debatesPublicos/PaginaDebate/Responder/responderResposta'
import Testando from '../views/Teste'

import { headerRight } from '../components/Header';

const Stack = createStackNavigator()
const BottomStack = createStackNavigator();

function headerStyle(title) {
  return {
    title: title, headerTintColor: 'white', headerTitleStyle: { fontSize: hp('2.7%'), color: 'white', }, headerStyle: { height: hp('6.8%'), backgroundColor: '#7c99e2' }
  }
}

const chatHeaderStyle = {
  headerRight: () => (
    <TouchableOpacity>
      <Text> style={{ marginRight: 10 }} </Text> </TouchableOpacity>),
  title: 'Drogas deveriam ser legalizadas?', headerTitleStyle: { fontSize: 18, color: 'white', marginLeft: 15 }, headerStyle: { height: 50, backgroundColor: '#7c99e2' }
}


const EditProfileHeaderStyle = {
  headerRight: () => (<Text style={{ marginRight: 10, color: 'white' }}>Avançar</Text>),
  title: 'Editar Perfil', headerTitleStyle: { fontSize: 18, color: 'white', marginLeft: 15 }, headerStyle: { height: 50, backgroundColor: '#7c99e2' }
}

export default props => {
  return <Stack.Navigator initialRouteName="BottomTab">
    <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
    <Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{ headerShown: false }} />
    <Stack.Screen name="EscolherInteresses" component={EscolherInteresses} options={{ headerShown: false }}/>
    <Stack.Screen name="IntrucoesTeste" component={IntrucoesTeste} options={{ headerShown: false }} />
    <Stack.Screen name="PaginaTeste" component={PaginaTeste} options={{ headerShown: false }} />
    <Stack.Screen name="EscolherCoordenadas" component={EscolherCoordenadas} options={{ headerShown: false }}/>
    <Stack.Screen name="ExplicacaoEixos" component={ExplicacaoEixos} options={{ headerShown: false }}/>
    <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
    <Stack.Screen name="MeuPerfil" component={MeuPerfil} options={{ headerShown: false }} />
    <Stack.Screen name="OutrosPerfis" component={OutrosPerfis} options={{ headerShown: false }} />
    <Stack.Screen name="EscolherTemaDebate" component={EscolherTemaDebate} options={headerStyle('Escolher tema')} />
    <Stack.Screen name="DebateInfosScreen" component={DebateInfosScreen} options={headerStyle('Informações debate')} />
    <Stack.Screen name="ChatScreen" component={ChatScreen} options={chatHeaderStyle} />
    <Stack.Screen name="MeusDebatesCriados" component={MeusDebatesCriados} options={headerStyle('Meus debates criados')} />
    <Stack.Screen name="AddNovoDebate" component={AddNovoDebate} options={headerStyle('Criar um debate')} />
    <Stack.Screen name="PaginaDebate" component={PaginaDebate} options={headerStyle('')} />
    <Stack.Screen name="Notificacoes" component={Notificacoes} options={headerStyle('Notificações')} />
    <Stack.Screen name="Responder" component={Responder} options={headerStyle('Responder')} />
    <Stack.Screen name="ResponderResposta" component={ResponderResposta} options={headerStyle('Responder')} />
    <Stack.Screen name="RespostasDeUmaResposta" component={RespostasDeUmaResposta} options={headerStyle('')} />
    <Stack.Screen name="Testando" component={Testando} options={headerStyle('')} options={{ headerShown: false }} />
    
  </Stack.Navigator>;
}
