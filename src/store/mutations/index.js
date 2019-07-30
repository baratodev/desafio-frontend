import carrinho from "../../helpers/carrinho";

const mutationPorCampo = campo => (state, valor) => state[campo] = valor;

export const types = {
  CARREGANDO: 'carregando',
  LISTAR_OFERTAS: 'listarOfertas',
  LISTAR_OFERTAS_POR_CATEGORIA: 'listarOfertasPorCategoria',
  PEGAR_OFERTA: 'pegarOferta',
  ALTERNAR_TEMA: 'alternarTema',
  ADICIONAR_AO_CARRINHO: 'adicionarAoCarrinho',
  REMOVER_DO_CARRINHO: 'removerDoCarrinho',
  LIMPAR_CARRINHO: 'limparCarrinho',
};

export default {
  [types.CARREGANDO]: mutationPorCampo('carregando'),
  [types.LISTAR_OFERTAS]: mutationPorCampo('ofertas'),
  [types.LISTAR_OFERTAS_POR_CATEGORIA]: mutationPorCampo('ofertasPorCategoria'),
  [types.PEGAR_OFERTA]: mutationPorCampo('oferta'),
  [types.ALTERNAR_TEMA]: (state) => {
    state.temaEscuro = !state.temaEscuro;
    localStorage.setItem('tema-escuro', state.temaEscuro);
  },
  [types.ADICIONAR_AO_CARRINHO]: (state, item) => {
    state.carrinho = carrinho.adicionar(item);
    state.itensUnicosCarrinho = carrinho.listarUnicos();
  },
  [types.REMOVER_DO_CARRINHO]: (state, indice) => {
    state.carrinho = carrinho.remover(indice);
    state.itensUnicosCarrinho = carrinho.listarUnicos();
  },
  [types.LIMPAR_CARRINHO]: (state, indice) => {
    state.carrinho = carrinho.limpar();
    state.itensUnicosCarrinho = state.carrinho;
  }
}