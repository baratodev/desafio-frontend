import storage from "./storage";

const listar = () => storage.pegar('carrinho') || [];

const listarUnicos = () => {
  const carrinho = listar();
  const itemsUnicos = carrinho.reduce((obj, item) => {
    obj[item.id] = { ...item };

    return obj;
  }, {});
  return Object.values(itemsUnicos);
};

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

const limpar = () => {
  const carrinho = [];
  storage.inserir('carrinho', carrinho);
  return carrinho;
};

export default {
  listar,
  listarUnicos,
  adicionar,
  remover,
  limpar
};