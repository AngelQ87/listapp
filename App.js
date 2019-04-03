import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Button, 
         Alert, 
         ImageBackground,
         Image,
        } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';        
 
import Inicio from './component/Inicio'; 
import Crearusuario from './component/Crearusuario'; 
import Iniciarsesion from './component/Iniciarsesion'; 
import Camara from './component/Camara';
import Camaraotra  from './component/Camaraotra';
import Adminadd from './component/Adminadd';

 

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Inicio,
    },
    Iniciar: {
      screen: Iniciarsesion,
    },
    Crear: {
      screen: Crearusuario,
    },
    Camara: {
      screen: Camara,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  
 
  render() {
    return (
      
      <Adminadd/>

      
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,               
  },
  inner: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, .6)',
    alignItems: 'center',
    justifyContent: 'center', 
    flexDirection: 'column',
    justifyContent: 'space-between', 
  },
  
  

});
