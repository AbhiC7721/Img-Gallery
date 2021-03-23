import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration 
var firebaseConfig = {
    apiKey: "AIzaSyCrJU60OSNr6or34u42T5xPMb48YnWPlw0",
    authDomain: "abhi-gallery.firebaseapp.com",
    projectId: "abhi-gallery",
    storageBucket: "abhi-gallery.appspot.com",
    messagingSenderId: "482916208211",
    appId: "1:482916208211:web:898fb7887185a816a280a6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFireStore = firebase.firestore();
  const timestamp  = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFireStore, timestamp };
