const pegar = (item) => JSON.parse(localStorage.getItem(item));
const inserir = (item, valor) => localStorage.setItem(item, valor);

export default {
  pegar,
  inserir
};