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
import EscolherTemaDebate from '../views/app/debatesPrivados/EscolherTemaDebate'
import OutrosPerfis from '../views/app/OutrosPerfis'
import PaginaInstrucoes from '../views/testeCoordenadas/PaginaInstrucoes'
import ExplicacaoEixos from '../views/testeCoordenadas/ExplicacaoEixos'
import EscolherCoordendas from  '../views/testeCoordenadas/EscolherCoordendas'
import DebateInfosScreen from  '../views/app/debatesPrivados/Chat/DebateInfosScreen'
import ChatScreen from  '../views/app/debatesPrivados/Chat/ChatScreen'
import Icon from 'react-native-vector-icons/MaterialIcons'


const Stack = createStackNavigator()
const DebatePublicoStack = createStackNavigator();

function BottomTabStack() {
  return (
    <DebatePublicoStack.Navigator initialRouteName="ChatScreen">
      <DebatePublicoStack.Screen name="BottomTab" component={BottomTab} options={{headerShown:false}}/>
      <DebatePublicoStack.Screen name="MeuPerfil" component={MeuPerfil} options={{headerShown:false}}/>
      <DebatePublicoStack.Screen name="intrucoesTeste" component={intrucoesTeste} options={{headerShown:false}}/>
      <DebatePublicoStack.Screen name="TesteView" component={TesteView} options={{headerShown:false}}/>
      <DebatePublicoStack.Screen name="EscolherTemaDebate" component={EscolherTemaDebate} options={{headerShown:false}}/>
      <DebatePublicoStack.Screen name="OutrosPerfis" component={OutrosPerfis} options={{headerShown:false}}/>
      <DebatePublicoStack.Screen name="DebateInfosScreen" component={DebateInfosScreen} options={{title:'Informações Debate',headerTitleStyle:{fontSize:18,color:'white'}, headerStyle:{height:50,backgroundColor:'#7c99e2'}}} />
      <DebatePublicoStack.Screen name="ChatScreen" component={ChatScreen}
       options={{
        headerRight:()=>(<><Icon style={{marginRight:10}} name='more-vert'
        size={25}
        color={'white'} /></>),
        title:'Drogas deveriam ser legalizadas? Qual a sua opnião?',headerTitleStyle:{fontSize:18,color:'white',marginLeft:15}, headerStyle:{height:50,backgroundColor:'#7c99e2'}}} 
       />
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
        <Stack.Screen  name ="PaginaInstrucoes" component={PaginaInstrucoes} />
        <Stack.Screen  name ="ExplicacaoEixos" component={ExplicacaoEixos} />
        <Stack.Screen  name ="EscolherCoordendas" component={EscolherCoordendas} />
        <Stack.Screen  name ="Cadastro2" component={Cadastro2} />
        <Stack.Screen  name ="Cadastro3" component={Cadastro3} />
        <Stack.Screen  name ="BottomTabStack" component={BottomTabStack} />
       </Stack.Navigator>;
}
