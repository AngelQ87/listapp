import React from 'react' ;
import { Alert, Text , View , StyleSheet, TouchableOpacity, Image } from 'react-native' ;
import { Camera , Permissions, BarCodeScanner } from 'expo' ; 
import firebase from '../Firebase';

  
export default class CameraExample extends React . Component {
     
      constructor(props){
        super(props);       
        var db = firebase.firestore();
        this.state = { 
          hasCameraPermission : null , 
          type : Camera . Constants . Type . back , 
          barcodeScanning: false,
          isLoading: true,
          codigos: [],
        } ; 

        this.onBarCodeScanned= this.onBarCodeScanned.bind(this);
        
      }

      
     async componentDidMount () {
          const { status } = await Permissions . askAsync ( Permissions . CAMERA ) ; 
          this . setState ( {hasCameraPermission : status === 'granted' } ) ; 
          
           } ;
         
    
     


      onBarCodeScanned = code => {
            
              var cod = code.data;
              var posicion = 0;
              var extraccion= "";
                while(letra != '-'){
                var letra= cod[posicion];
                  if(letra != '-')
                      var extraccion= extraccion + letra;  
                posicion++;  
                }
                           

            var db = firebase.firestore();
            var docRef = db.collection("codigos").doc(extraccion);
            //`${code.data}`
            docRef.get().then(function(doc) {
              if (doc.exists) {
                   Alert.alert(`Codigo: ${extraccion} P.V.P: ${doc.data().pvp} Empresaria: ${doc.data().empresaria}`);
              } else {
                  // doc.data() will be undefined in this case
                  Alert.alert("El codigo no existe o no se encuentra registrado.");
              }
          }).catch(function(error) {
            Alert.alert("Error al acceder a la base de datos");
          });

                       
          };




      render () { 

            const { hasCameraPermission } = this . state ;

                if ( hasCameraPermission === null ){
                    return <View/> ; 
                   } 
                else if ( hasCameraPermission === false ){ 
                    return <Text>No access to camera</Text>; 
                   }
                else { 
                     
                    return ( <View style = { { flex : 1 } }>
                                 <Camera style = { { flex : 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', } } type = { this . state . type } barCodeScannerSettings={{
                                    barCodeTypes: [BarCodeScanner.Constants.BarCodeType.code39],}}
                                    onBarCodeScanned={this.onBarCodeScanned}>
                                    <View>
                                      <Image style={{width: 300 , height: 120}} source={require('./images/logo.png')}></Image>
                                    </View>
                                    <View style={styles.options}>
                                          <View style={styles.detectors}>                                       
                                            <TouchableOpacity>                                              
                                            </TouchableOpacity>
                                          </View>
                                      </View> 
                                      <View style={{ width: 'auto', height: 30 }}>
                                        <Text>Powered by Ing. Angel Quintero</Text>
                                      </View>                                   
                                </Camera>
                               </View> 
                       
                           ); 
                       } 
                      } 
                    } 



const styles = StyleSheet.create({
                            
  options: {
  position: 'absolute',
  bottom: 80,
  left: 30,
  width: 300,
  height: 300,
  backgroundColor: '#000000BA',
  borderRadius: 4,
  padding: 10,
  },
  detectors: {
  flex: 0.5,
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'row',
  },
                            
  });                      