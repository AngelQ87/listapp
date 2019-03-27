import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, ImageBackground, } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class Camaraotra extends Component {
  state = {
    hasCameraPermission: null,
    categotia: null,
    precio_pvp: null,
    precio_distribuidor: null,
    
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
    Alert.alert(
      'Scan successful!',
      JSON.stringify(data)
    );
  };

  render() {
    return (
      <ImageBackground style={styles.container} source={require('./images/fondo.png')} imageStyle={{ resizeMode: 'stretch' }}>
        <View style={styles.inner}>
          {
            this.state.hasCameraPermission === null ?
              <Text>Requesting for camera permission</Text> :
            this.state.hasCameraPermission === false ?
              <Text>Camera permission is not granted</Text> :
              
            <BarCodeScanner onBarCodeRead={this._handleBarCodeRead} style={{ width: 300, height: 200  }}/>
          }
        </View>           
        <View>
          <View>
             <Text>Precio {this.state.categotia}:</Text>
          </View>
          <View>
             <Text>{this.state.precio_distribuidor}</Text>
          </View>
          <View>
             <Text>Precio P.V.P:</Text>
          </View>
          <View>
             <Text>{this.state.precio_pvp}</Text>
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
    //justifyContent: 'center',      
  },

});
