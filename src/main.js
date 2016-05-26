import Vue from 'vue';
import App from './App';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Shops from './components/Shops';

// import VueRouter from 'vue-router';
import VueRouter from './router/index';
import VueResource from 'vue-resource';

Vue.use(VueResource);
// Vue.use(VueRouter);

const router = VueRouter.router;

// const router = new VueRouter();

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
  '/shops': {
    component: Shops,
  },
});

router.redirect({
  '*': '/home',
});

router.start(App, '#app');
