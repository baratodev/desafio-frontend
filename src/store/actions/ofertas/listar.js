import api from '../../../api';

import {types} from '../../mutations';

export default ({ commit }) => {
  commit(types.CARREGANDO, true);

  return api.get('/offers')
    .then(res => res.data)
    .then(ofertas => commit(types.LISTAR_OFERTAS, ofertas))
    .catch(console.error)
    .finally(() => commit(types.CARREGANDO, false));
}