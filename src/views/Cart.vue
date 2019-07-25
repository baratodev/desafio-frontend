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
      <div>
        <Heading text="Resumo da Compra" />
        {{ $store.state.cart }}
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
  }
};
</script>


<style lang="scss" scoped>
@import "@/assets/cart.scss";
</style>
