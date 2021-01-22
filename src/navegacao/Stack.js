import React from 'react'; 
import {createStackNavigator,HeaderBackButton} from '@react-navigation/stack'
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
import Teste from '../views/app/Teste'
import AddNovoDebate from '../views/app/debatesPublicos/AddNovoDebate'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Stack = createStackNavigator()
const DebatePublicoStack = createStackNavigator();

function headerStyle(title) {
  return  {
    title:title,headerTintColor:'white',headerTitleStyle:{fontSize:hp('2.7%'),color:'white',}, headerStyle:{ height:hp('6.8%'),backgroundColor:'#7c99e2'}}
}

const headerStyle2 = { headerRight:()=>(<><Icon style={{marginRight:10}} name='more-vert' size={25} color={'white'} /></>),
title:'Drogas deveriam ser legalizadas?',headerTitleStyle:{fontSize:18,color:'white',marginLeft:15}, headerStyle:{height:50,backgroundColor:'#7c99e2'}}


function BottomTabStack() {
  return (
    <DebatePublicoStack.Navigator initialRouteName="BottomTab">
      <DebatePublicoStack.Screen name="BottomTab" component={BottomTab} options={{headerShown:false}}/>
      <DebatePublicoStack.Screen name="MeuPerfil" component={MeuPerfil} options={{headerShown:false}}/>
      <DebatePublicoStack.Screen name="intrucoesTeste" component={intrucoesTeste} options={{headerShown:false}}/>
      <DebatePublicoStack.Screen name="TesteView" component={TesteView} options={{headerShown:false}}/>
      <DebatePublicoStack.Screen name="EscolherTemaDebate" component={EscolherTemaDebate}
       options={headerStyle('Escolher tema')}/>
      <DebatePublicoStack.Screen name="OutrosPerfis" component={OutrosPerfis} options={{headerShown:false}}/>
      <DebatePublicoStack.Screen name="DebateInfosScreen" component={DebateInfosScreen} options={headerStyle('Informações debate')}/>
      <DebatePublicoStack.Screen name="ChatScreen" component={ChatScreen}
       options={headerStyle2} 
       />
      <DebatePublicoStack.Screen name="MeusDebatesCriados" component={MeusDebatesCriados} options={headerStyle('Meus debates criados')}/>
      <DebatePublicoStack.Screen name="Teste" component={Teste}/>
      <DebatePublicoStack.Screen name="AddNovoDebate" component={AddNovoDebate} options={headerStyle('Criar um debate')} />
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
