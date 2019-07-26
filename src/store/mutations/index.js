const mutationPorCampo = campo => (state, valor) => state[campo] = valor;

export default {
  carregando: mutationPorCampo('carregando'),
  listarOfertas: mutationPorCampo('ofertas'),
  pegarOferta: mutationPorCampo('oferta'),
  alternarTema: (state) => {
    state.temaEscuro = !state.temaEscuro;
    localStorage.setItem('tema-escuro', state.temaEscuro);
  }
}