import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Welcome from '../views/Welcome'
import Avisos from '../views/Avisos'
import Login from '../views/Login'
import Cadastro1 from '../views/cadastro/Cadastro1'
import Cadastro2 from '../views/cadastro/Cadastro2'
import Cadastro3 from '../views/cadastro/Cadastro3'
import MeuPerfil from '../views/app/MeuPerfil'
import intrucoesTeste from '../views/testeCoordenadas/instrucoesView'
import BottomTab  from './BottomTab'
import TesteView from '../views/testeCoordenadas/testeView'
import MeusDebatesCriados from '../views/app/MeusDebatesCriados'

const Stack = createStackNavigator()
const DebatePublicoStack = createStackNavigator();

function BottomTabStack() {
  return (
    <DebatePublicoStack.Navigator initialRouteName="BottomTab">
      <DebatePublicoStack.Screen name="BottomTab" component={BottomTab} options={{headerShown:false}}/>
      <DebatePublicoStack.Screen name="MeuPerfil" component={MeuPerfil} options={{headerShown:false}}/>
      <DebatePublicoStack.Screen name="intrucoesTeste" component={intrucoesTeste} options={{headerShown:false}}/>
      <DebatePublicoStack.Screen name="TesteView" component={TesteView} options={{headerShown:false}}/>
      <DebatePublicoStack.Screen name="MeusDebatesCriados" component={MeusDebatesCriados} options={{title:'Meus Debates Criados',headerTitleStyle:{fontSize:18}, headerStyle:{height:50}}}/>
    </DebatePublicoStack.Navigator>
  );
}

export default props => {
  return <Stack.Navigator initialRouteName="BottomTabStack"
        screenOptions={{headerShown: false}}>
        <Stack.Screen  name ="Welcome" component={Welcome} />
        <Stack.Screen  name ="Avisos" component={Avisos} />
        <Stack.Screen  name ="Login" component={Login} />
        <Stack.Screen  name ="Cadastro1" component={Cadastro1} />
        <Stack.Screen  name ="Cadastro2" component={Cadastro2} />
        <Stack.Screen  name ="Cadastro3" component={Cadastro3} />
        <Stack.Screen  name ="BottomTabStack" component={BottomTabStack} />
       </Stack.Navigator>;
}
