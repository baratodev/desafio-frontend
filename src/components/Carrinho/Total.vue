<template>
  <md-list-item>
    <strong>Total:</strong> R$ {{ pegarTotal().toFixed(2).replace('.', ',') }}
  </md-list-item>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "Total",
    methods: {
      pegarTotal() {
        return this.carrinho.reduce((total, item) => total + parseFloat(item.price), 0);
      },
    },
    computed: {
      ...mapGetters([
        'carrinho'
      ])
    }
  }
</script>