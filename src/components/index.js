import Vue from 'vue';

import Layout from './Layout.vue';

/* Ofertas */
import ListaOfertas from './Ofertas/Lista.vue';
import ItemOferta from './Ofertas/Item.vue';

/* Carrinho */
import ItemCarrinho from './Carrinho/Item.vue';
import TotalCarrinho from './Carrinho/Total.vue';

Vue.component('bc-layout', Layout);
Vue.component('bc-lista-ofertas', resolve => {
  import('./Ofertas/Lista.vue').then(Component => resolve(Component.default));
});
Vue.component('bc-item-oferta', resolve => {
  import('./Ofertas/Item.vue').then(Component => resolve(Component.default));
});

Vue.component('bc-item-carrinho', resolve => {
  import('./Carrinho/Item.vue').then(Component => resolve(Component.default));
});
Vue.component('bc-total-carrinho', resolve => {
  import('./Carrinho/Total.vue').then(Component => resolve(Component.default));
});