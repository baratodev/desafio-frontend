const pegar = (item) => JSON.parse(localStorage.getItem(item));
const inserir = (item, valor) => localStorage.setItem(item, JSON.stringify(valor));

export default {
  pegar,
  inserir
};