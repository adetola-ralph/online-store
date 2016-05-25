import Vue from 'vue';
import App from './App';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Stores from './components/Stores';
import Firebase from 'Firebase';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Firebase);


const config = {
  apiKey: 'AIzaSyDonFLkP43WNZF_m3raLR7PCscM6BNwL_M',
  authDomain: 'online-store-757b4.firebaseapp.com',
  databaseURL: 'https://online-store-757b4.firebaseio.com',
  storageBucket: 'online-store-757b4.appspot.com',
};

const firebase = Firebase.initializeApp({ config });
const router = new VueRouter();

router.map({
  '/home': {
    component: Home,
  },
  '/login': {
    component: Login,
  },
  '/register': {
    component: Register,
  },
  '/stores': {
    component: Stores,
  },
});

router.redirect({
  '*': '/home',
});

router.start(App, '#app');
