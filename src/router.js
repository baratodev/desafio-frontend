import VueRouter from 'vue-router';

import Ofertas from './pages/Ofertas.vue';

const routes = [
  {
    name: 'ofertas',
    component: Ofertas,
    path: '/'
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;