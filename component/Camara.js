import React from 'react' ;
import { Alert, Text , View , StyleSheet, TouchableOpacity } from 'react-native' ;
import { Camera , Permissions, BarCodeScanner } from 'expo' ; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
  
export default class CameraExample extends React . Component {
     
      constructor(props){
        super(props);
        this.state = { 
          hasCameraPermission : null , 
          type : Camera . Constants . Type . back , 
          barcodeScanning: false,
        } ; 

        this.toggleBarcodeScanning= this.toggleBarcodeScanning.bind(this);
        this.onBarCodeScanned= this.onBarCodeScanned.bind(this);
      }



     async componentDidMount () {
          const { status } = await Permissions . askAsync ( Permissions . CAMERA ) ; 
          this . setState ( {
               hasCameraPermission : status === 'granted' } ) ; 
           } ;

                     
           toggleBarcodeScanning = () => this.setState({ barcodeScanning: !this.state.barcodeScanning });

           onBarCodeScanned = code => {
            this.setState(
              { barcodeScanning: !this.state.barcodeScanning },
              Alert.alert(`Barcode found: ${code.data}`)
            );
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
                                 <Camera style = { { flex : 1 } } type = { this . state . type } barCodeScannerSettings={{
                                    barCodeTypes: [BarCodeScanner.Constants.BarCodeType.code39],}}
                                    onBarCodeScanned={this.state.barcodeScanning ? this.onBarCodeScanned : undefined}>
                                    <View style={styles.options}>
                                          <View style={styles.detectors}>                                       
                                            <TouchableOpacity onPress={this.toggleBarcodeScanning}>
                                              <MaterialCommunityIcons name="barcode-scan" size={60} color={this.state.barcodeScanning ? "white" : "#858585"} />
                                            </TouchableOpacity>
                                          </View>
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