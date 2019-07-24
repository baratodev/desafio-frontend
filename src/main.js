import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

//global filters
import './filters';

//carrousel
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
