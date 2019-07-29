import VueRouter from 'vue-router';

import Ofertas from './pages/Ofertas.vue';
import Carrinho from "./pages/Carrinho.vue";

const routes = [
  {
    name: 'ofertas',
    component: () => import('./pages/Ofertas.vue'),
    path: '/'
  },
  {
    name: 'carrinho',
    component: () => import('./pages/Carrinho.vue'),
    path: '/carrinho'
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  routes
});

export default router;