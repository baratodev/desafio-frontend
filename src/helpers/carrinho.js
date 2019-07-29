import storage from "./storage";

const listar = () => storage.pegar('carrinho') || [];

const adicionar = (oferta) => {
  const carrinho = listar();
  carrinho.push(oferta);
  storage.inserir('carrinho', carrinho);
  return carrinho;
};

const remover = (indice) => {
  const carrinho = listar();
  carrinho.splice(indice, 1);
  storage.inserir('carrinho', carrinho);
  return carrinho;
};

export default {
  listar,
  adicionar,
  remover
};