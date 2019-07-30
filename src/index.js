import Vue from 'vue';

import './vue-setup';

import router from './router';
import store from './store';

import App from './App.vue';
import './components';

const app = new Vue(
  Vue.util.extend({
    router,
    store
  }, App)
);

app.$mount('#app');