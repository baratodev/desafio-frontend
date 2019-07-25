<template>
  <div class="container">
    <div class="cart">
      <form class="cart__form">
        <Heading text="Pagamentos" />
        <input type="text" placeholder="cartão" />
        <input type="text" placeholder="nome impresso" />
        <div class="input-group">
          <input type="text" placeholder="validade" />
          <input type="text" placeholder="codigo de seg." />
        </div>
        <button class="btn">
          <MdCashIcon />Pagar
        </button>
      </form>
      <div class="cart__account">
        <Heading text="Resumo da Compra" />
        <div v-if="cart.length > 0">
          <div class="cart__item" v-for="item in cart" :key="item.id">
            <h3>{{ item.title | excerpt }}</h3>
            <p>{{ item.price | formatPrice }}</p>
          </div>
        </div>
        <p v-else>nenhum item no carrinho :(</p>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading";
import MdCashIcon from "vue-ionicons/dist/md-cash.vue";

export default {
  name: "cart",
  components: {
    Heading,
    MdCashIcon
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  }
};
</script>


<style lang="scss" scoped>
@import "@/assets/cart.scss";
</style>
