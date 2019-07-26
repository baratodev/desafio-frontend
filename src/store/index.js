import {Store} from 'vuex';

import * as actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default new Store({
  state: {
    temaEscuro: !!JSON.parse(localStorage.getItem('tema-escuro')),
    carregando: true,
    ofertas: [],
    ofertasPorCategoria: [],
    oferta: null,
  },
  actions,
  getters,
  mutations
})