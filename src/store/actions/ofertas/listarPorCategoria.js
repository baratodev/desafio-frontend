import api from '../../../api';

import {types} from '../../mutations';

export default ({ commit, state }) => {
  commit(types.CARREGANDO, true);

  const promises = state.ofertas.map(oferta => api.get(`/offer/${oferta.id}`));

  Promise.all(promises)
    .then(responses => responses.map(res => res.data))
    .then(ofertas => {
      let ofertasPorCategoria = ofertas.reduce((obj, oferta, index) => {
        if (!Array.isArray(obj[oferta.category])) obj[oferta.category] = [];

        obj[oferta.category].push({
          ...oferta,
          image: state.ofertas[index].image
        });

        return obj;
      }, {});

      ofertasPorCategoria = Object.keys(ofertasPorCategoria).map(categoria => ({
        categoria,
        ofertas: ofertasPorCategoria[categoria]
      }));
      commit(types.LISTAR_OFERTAS_POR_CATEGORIA, ofertasPorCategoria);
      commit(types.CARREGANDO, false);
    })
}