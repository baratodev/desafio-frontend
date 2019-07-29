import VueRouter from 'vue-router';

import Ofertas from './pages/Ofertas.vue';
import Carrinho from "./pages/Carrinho.vue";

const routes = [
  {
    name: 'ofertas',
    component: Ofertas,
    path: '/'
  },
  {
    name: 'carrinho',
    component: Carrinho,
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