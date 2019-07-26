import api from '../../../api';

export default ({ commit }) => {
  commit('carregando', true);

  return api.get('/offers')
    .then(res => res.data)
    .then(ofertas => commit('listarOfertas', ofertas))
    .catch(console.error)
    .finally(() => commit('carregando', false));
}