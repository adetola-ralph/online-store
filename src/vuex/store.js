import Vue from 'vue';
import Vuex from 'vuex';

// Make vue aware of Vuex
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // TODO: Set up our initial state
    authenticated: false,
    username: '',
    user_id: '',
  },
  mutations: {
    // TODO: set up our mutations
  },
});

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default store;
