import firebase from 'firebase/app';

import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyC-T9C5XmBCBwsLgn2UQ8R1eP-amCpqMIc",
    authDomain: "olafur-arnalds-store.firebaseapp.com",
    projectId: "olafur-arnalds-store",
    storageBucket: "olafur-arnalds-store.appspot.com",
    messagingSenderId: "1067654716456",
    appId: "1:1067654716456:web:2c286092426595ee3e691d"
  };


const fb = firebase.initializeApp(firebaseConfig);


export const db = fb.firestore();