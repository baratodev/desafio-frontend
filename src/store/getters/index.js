const getterPorCampo = campo => state => state[campo];

export default {
  carregando: getterPorCampo('carregando'),
  ofertas: getterPorCampo('ofertas'),
  oferta: getterPorCampo('oferta'),
}