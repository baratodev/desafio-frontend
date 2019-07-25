<template>
  <div class="header">
    <div class="header__container">
      <router-link to="/" class="header__title">Barato Coletivo</router-link>
      <button class="header__cart" @click="$router.push('/cart')">
        <MdCartIcon />
      </button>
    </div>
  </div>
</template>

<script>
import MdCartIcon from "vue-ionicons/dist/md-cart.vue";

export default {
  name: "toolbar",
  components: {
    MdCartIcon
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/toolbar.scss";
</style>
