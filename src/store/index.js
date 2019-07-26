import {Store} from 'vuex';

import * as actions from './actions'
import getters from './getters'
import mutations from './mutations'

import carrinho from "../helpers/carrinho";

export default new Store({
  state: {
    temaEscuro: !!JSON.parse(localStorage.getItem('tema-escuro')),
    carregando: true,
    ofertas: [],
    ofertasPorCategoria: [],
    oferta: null,
    carrinho: carrinho.listar()
  },
  actions,
  getters,
  mutations
})