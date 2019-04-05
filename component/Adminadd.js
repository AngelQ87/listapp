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

    this.button_guardar= this.button_guardar.bind(this);
    
  }

  button_guardar(){

        var db = firebase.firestore();
        db.collection("codigos").add({
          directores: this.state.directores, 
          mayorista: this.state.mayorista,
          minorista: this.state.minorista,
          empresaria: this.state.empresaria,
          pvp: this.state.pvp,          
      })
      .then(function(docRef) {
          //console.log("Document written with ID: ", docRef.id); 
          Alert.alert('Codigo insertado correctamente');                     
      })
      .catch(function(error) {
          //console.error("Error adding document: ", error);
          Alert.alert('Error al insertar el codigo');
      });

    this.setState({
        codigo: "",
        directores: "",
        mayorista: "",
        minorista: "",
        empresaria: "",
        pvp: "",
        isLoading: false,
    })
    
  }

 

  render() {
    return (
      
      <ImageBackground style={styles.container} source={require('./images/fondo.png')}
        imageStyle={{ resizeMode: 'stretch' }} >
        <View style={styles.inner}>
           <View style={{paddingTop: 50}}>
               <View style={styles.subContainer}>
                <Text>Codigo: </Text>   
                <TextInput
                    placeholder={'Codigo del producto'}
                    value={this.state.codigo}
                    onChangeText={(codigo) => this.setState({codigo})}
                />
               </View>
               <View style={styles.subContainer}>
               <Text>Directores: </Text>   
                <TextInput
                    placeholder={'Precio directores'}
                    value={this.state.directores}
                    onChangeText={(directores) => this.setState({directores})}
                />
               </View>
               <View style={styles.subContainer}>
               <Text>Mayorista: </Text>   
                <TextInput
                    placeholder={'Precio mayorista'}
                    value={this.state.mayorista}
                    onChangeText={(mayorista) => this.setState({mayorista})}
                />
               </View>
               <View style={styles.subContainer}>
               <Text>Minorista: </Text>    
                <TextInput
                    placeholder={'Precio minorista'}
                    value={this.state.minorista}
                    onChangeText={(minorista) => this.setState({minorista})}
                />
               </View>
               <View style={styles.subContainer}>
                <Text>Empresaria: </Text>   
                <TextInput
                    placeholder={'Precio empresaria'}
                    value={this.state.empresaria}
                    onChangeText={(empresaria) => this.setState({empresaria})}
                />
               </View>
               <View style={styles.subContainer}>
                <Text>P.V.P: </Text>   
                <TextInput 
                    placeholder={'Precio PVP'}
                    value={this.state.pvp}
                    onChangeText={(pvp) => this.setState({pvp})}
                />
               </View>
               <View style={{paddingTop: 20}}>
                    <Button
                        large
                        leftIcon={{name: 'save'}}
                        title='Guardar'
                        disabled= {!this.state.codigo.length
                                   
                                  }
                        onPress={() => this.button_guardar()} 
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
    //marginBottom: 20,    
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
    flexDirection: 'row', 
    paddingTop: 20,
    
   },
  textinput: {
    borderColor: 'black',
  }
  

});
