import api from '../../../api';

export default ({ commit }, id) => {
  commit('carregando', true);

  api.get(`/offer/${id}`)
    .then(res => res.data)
    .then(oferta => commit('pegarOferta', oferta))
    .catch(console.error)
    .finally(() => commit('carregando', false));
}