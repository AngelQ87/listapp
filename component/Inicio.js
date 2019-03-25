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

export default class Inicio extends React.Component {
  
  constructor(props){
    super(props);
    this.state= {text: ""};

    this.button_inicio= this.button_inicio.bind(this);
  }

  button_inicio(){
    Alert.alert('Button de Prueba');
  }

  render() {
    return (
      
      <ImageBackground style={styles.container} source={require('./images/fondo.png')}
        imageStyle={{ resizeMode: 'stretch' }} >
        <View style={styles.inner}>
           <View style={{ width: 'auto', height: 30 }}></View>
           <View style={{width: 'auto' , height: '50%' }}>
              <View>
                <Image style={{width: 300 , height: 120}} source={require('./images/logo.png')}></Image>
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                <View style={{ width: 'auto', height: 30 }}></View>
                <View style={{ width: 200, paddingTop: 50}}>
                  <Button title='Crear cuenta' onPress={() => this.props.navigation.navigate('Crear')} />
                </View>
                <View style={{ width: 200, paddingTop: 30}}>
                  <Button title='Iniciar sesion' onPress={() => this.props.navigation.navigate('Iniciar')} color="#841584" />
                </View>
              </View> 
           </View>
           <View style={{ width: 'auto', height: 30 }}>
              <Text>Powered by Ing. Angel Quintero</Text>
           </View>
        </View>        
      </ImageBackground>
     
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
