import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

//const settings = {timestampsInSnapshots: true};

var config = {
    apiKey: "AIzaSyAkrxJvqJgUkJq-zkk7eeRYd60oqgdzZeY",
    authDomain: "jelistapp.firebaseapp.com",
    databaseURL: "https://jelistapp.firebaseio.com",
    projectId: "jelistapp",
    storageBucket: "jelistapp.appspot.com",
    messagingSenderId: "613214805051"
  };

firebase.initializeApp(config);


//firebase.firestore().settings(settings);

export default firebase;