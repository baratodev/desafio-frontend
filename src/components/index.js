import Vue from 'vue';

import Layout from './Layout.vue';

/* Ofertas */
import ListaOfertas from './Ofertas/Lista.vue';
import ItemOferta from './Ofertas/Item.vue';

Vue.component('bc-layout', Layout);
Vue.component('bc-lista-ofertas', ListaOfertas);
Vue.component('bc-item-oferta', ItemOferta);