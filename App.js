import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Button, 
         Alert, 
         ImageBackground,
         Image } from 'react-native';
 
import imagenfondo from './component/images/fondo.png' ;   

const remote = 'https://github.com/AngelQ87/aquinsoftweb/blob/master/src/images/15.jpg';

export default class App extends React.Component {
  
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
      <View style={styles.container}>
        <ImageBackground 
         source={{ uri: 'https://github.com/AngelQ87/aquinsoftweb/blob/master/src/images/15.jpg'}}
         style={{width: '100%', height: '100%', flex: 1, }}
         imageStyle={{resizeMode: 'stretch'}}  >
          <View style={{ width: 'auto', height: 30, backgroundColor: 'powderblue' }}>
          </View>
          <View>
            <Text style={styles.red}>Prueba App</Text>
            <Button title='Inicio' onPress={this.button_inicio} color="#841584" />
          </View>
          <View style={{ width: 'auto', height: 30 }}>
            <Text>Powered by Ing. Angel Quintero</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',    
    alignItems: 'center',
    //justifyContent: 'center',    
    padding: 30,  
    flexDirection: 'column',
    justifyContent: 'space-between',     
  },
  red: {
    color: '#841584',
    fontSize: 30, 
    padding: 20,
  },
  
});
