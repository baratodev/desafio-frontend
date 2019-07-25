const mutationPorCampo = campo => (state, valor) => state[campo] = valor;

export default {
  carregando: mutationPorCampo('carregando'),
  listarOfertas: mutationPorCampo('ofertas'),
  pegarOferta: mutationPorCampo('oferta'),
}