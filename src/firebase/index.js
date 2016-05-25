// Initialize Firebase
var config = {
 apiKey: "AIzaSyDonFLkP43WNZF_m3raLR7PCscM6BNwL_M",
 authDomain: "online-store-757b4.firebaseapp.com",
 databaseURL: "https://online-store-757b4.firebaseio.com",
 storageBucket: "online-store-757b4.appspot.com",
};
firebase.initializeApp(config);
var firebaseDB = firebase.database();

export default {
  firebaseDB:firebaseDB,
}
