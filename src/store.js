import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      state.cart.push(payload);
    }
  },

  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    }
  }
});
