import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDonFLkP43WNZF_m3raLR7PCscM6BNwL_M',
  authDomain: 'online-store-757b4.firebaseapp.com',
  databaseURL: 'https://online-store-757b4.firebaseio.com',
  storageBucket: 'online-store-757b4.appspot.com',
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseAuth = firebase.auth();

export default {
  firebaseDB,
  firebaseAuth,
};
