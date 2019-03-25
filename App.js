import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Button, 
         Alert, 
         ImageBackground,
         Image,
        } from 'react-native';
 
import Inicio from './component/Inicio'; 
import Crearusuario from './component/Crearusuario'; 
import Iniciarsesion from './component/Iniciarsesion';      
 


export default class App extends React.Component {
  
 
  render() {
    return (
      
      <Iniciarsesion/>
     
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
