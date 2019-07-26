import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: []
  },

  getters: {
    quantityItems(state) {
      return state.cart.length;
    },
    total(state) {
      return state.cart.reduce((acc, item) => (acc += Number(item.price)), 0);
    }
  },

  mutations: {
    ADD_TO_CART(state, payload) {
      state.cart.push(payload);
    },
    REMOVE_TO_CART(state, payload) {
      state.cart = state.cart.filter(item => item.id !== payload);
    }
  },

  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeToCart({ commit }, id) {
      commit('REMOVE_TO_CART', id);
    }
  }
});
