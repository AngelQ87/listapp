import React from 'react';
import { StyleSheet, 
         Text, 
         View,        
         Alert,
         TextInput, 
         ImageBackground,
         Image,
         ScrollView,
         FlatList,
        } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from '../Firebase';        
 



export default class Adminadd extends React.Component {
  
  constructor(props){
    super(props);
    this.ref = firebase.firestore().collection('codigos');
    this.unsubscribe = null;
    this.state= {
        codigos:[],
        codigo: "",        
        loading: true,
    };

    this.button_agregar= this.button_agregar.bind(this);
    
  }

  button_agregar(){

        Alert.alert('Prueba');
  }


  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate) 
  }

  componentWillUnmount() {
      this.unsubscribe();
  }


  onCollectionUpdate = (querySnapshot) => {
    const codigos = [];
  
    querySnapshot.forEach((doc) => {
      const { directores, mayorista, minorista, empresaria, pvp } = doc.data();
  
      codigos.push({
        key: doc.id,
        doc, // DocumentSnapshot
        directores,
        mayorista,
        minorista,
        empresaria,
        pvp,
      });
    });
  
    this.setState({ 
      codigos,
      loading: false,
   });
  }


 

  render() {
    if (this.state.loading) {
      return null; // or render a loading icon
    }
    else
      return (      
        <ImageBackground style={styles.container} source={require('./images/fondo.png')}
          imageStyle={{ resizeMode: 'stretch' }} >
          <View style={styles.inner}>
            <View style={styles.subContainer}>
                  <Button
                    large
                    leftIcon={{name: 'add'}}
                    title='Agregar'
                    onPress={() => this.props.navigation.navigate('Adminadd')} 
                  />
                  <TextInput
                      placeholder={'Buscar'}
                      value={this.state.codigo}
                      onChangeText={(codigo) => this.setState({codigo})}
                  />
            </View>
            <View>
                <FlatList style={{ flex: 1 }}
                  data={this.state.codigos}
                  renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
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
