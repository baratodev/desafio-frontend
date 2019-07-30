<template>
  <router-view/>
</template>

<script>
  import Vue from 'vue';
  import {mapGetters} from 'vuex';

  export default {
    name: "App",
    computed: {
      ...mapGetters([
        'temaEscuro'
      ])
    },
    watch: {
      temaEscuro: {
        immediate: true,
        handler() {
          Vue.material.theming.theme = this.temaEscuro ? 'bc-dark' : 'bc';
        }
      }
    }
  }
</script>