import api from '../../../api';

import {types} from '../../mutations';

export default ({ commit }, id) => {
  commit(types.CARREGANDO, true);

  return api.get(`/offer/${id}`)
    .then(res => res.data)
    .then(oferta => commit(types.PEGAR_OFERTA, oferta))
    .catch(console.error)
    .finally(() => commit(types.CARREGANDO, false));
}