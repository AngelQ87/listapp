import React from 'react';
import { StyleSheet, 
         Text, 
         View,        
         Alert,
         TextInput, 
         ImageBackground,
         Image,
        } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from '../Firebase';        
 



export default class Adminadd extends React.Component {
  
  constructor(props){
    super(props);
    this.state= {
        codigo: "",
        directores: "",
        mayorista: "",
        minorista: "",
        empresaria: "",
        pvp: "",
        isLoading: false,
    };

    this.button_inicio= this.button_inicio.bind(this);
    this.updateTextInput= this.updateTextInput(this);
  }

  button_inicio(){
    Alert.alert('Button de Prueba');
  }

  updateTextInput = (text, field) => {
    const state = this.state
    state[field] = text;
    this.setState(state);
  }


  render() {
    return (
      
      <ImageBackground style={styles.container} source={require('./images/fondo.png')}
        imageStyle={{ resizeMode: 'stretch' }} >
        <View style={styles.inner}>
           <View>
               <View>
                <Text>Codigo: </Text>   
                <TextInput
                    placeholder={'Codigo'}
                    value={this.state.codigo}
                    onChangeText={(text) => this.updateTextInput(text, 'codigo')}
                />
               </View>
               <View>
               <Text>Directores: </Text>   
                <TextInput
                    placeholder={'Precio directores'}
                    value={this.state.directores}
                    onChangeText={(text) => this.updateTextInput(text, 'directores')}
                />
               </View>
               <View>
               <Text>Mayorista: </Text>   
                <TextInput
                    placeholder={'Precio mayorista'}
                    value={this.state.mayorista}
                    onChangeText={(text) => this.updateTextInput(text, 'mayorista')}
                />
               </View>
               <View>
               <Text>Minorista: </Text>    
                <TextInput
                    placeholder={'Precio minorista'}
                    value={this.state.minorista}
                    onChangeText={(text) => this.updateTextInput(text, 'minorista')}
                />
               </View>
               <View>
                <Text>Empresaria: </Text>   
                <TextInput
                    placeholder={'Precio empresaria'}
                    value={this.state.empresaria}
                    onChangeText={(text) => this.updateTextInput(text, 'empresaria')}
                />
               </View>
               <View>
                <Text>P.V.P: </Text>   
                <TextInput
                    placeholder={'Precio PVP'}
                    value={this.state.pvp}
                    onChangeText={(text) => this.updateTextInput(text, 'pvp')}
                />
               </View>
               <View style={styles.button}>
                    <Button
                        large
                        leftIcon={{name: 'save'}}
                        title='Guardar'
                        onPress={() => this.button_inicio()} 
                    />
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
  subContainer: {
    flex: 1,
    marginBottom: 20,
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
   },
  
  

});
