import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Button, 
         Alert, 
         ImageBackground,
         Image,
         TouchableHighlight,
        } from 'react-native';
 


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
            <TouchableHighlight onPress={this.button_inicio}>
                    <View style={{ width: 300, height: 50, backgroundColor: 'blue', marginTop: 60, 
                    marginBottom: 10, alignItems: 'center',justifyContent: 'center', borderRadius: 8,
                    borderWidth: 1}}>
                        <Text style={{color: 'white'}}>Iniciar sesion</Text>
                    </View>
            </TouchableHighlight>
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
  },
  
  

});
