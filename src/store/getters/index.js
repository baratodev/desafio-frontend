const getterPorCampo = campo => state => state[campo];

export default {
  temaEscuro: getterPorCampo('temaEscuro'),
  carregando: getterPorCampo('carregando'),
  ofertas: getterPorCampo('ofertas'),
  ofertasPorCategoria: getterPorCampo('ofertasPorCategoria'),
  oferta: getterPorCampo('oferta'),
  carrinho: getterPorCampo('carrinho'),
}