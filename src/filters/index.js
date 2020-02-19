import Vue from 'vue';

Vue.filter('formatPrice', valor => {
  return Number(valor).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
});

Vue.filter('excerpt', text => {
  return `${text.substr(0, 50)} ...`;
});
