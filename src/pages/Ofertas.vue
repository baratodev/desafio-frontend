<template>
  <bc-layout>

    <section class="md-categoria" v-for="item in ofertasPorCategoria">

      <h1>{{ item.categoria }}</h1>
      <bc-lista-ofertas :ofertas="item.ofertas" />

    </section>

  </bc-layout>
</template>

<script>
  import {mapActions, mapGetters, mapMutations} from 'vuex';
  import api from '../api';

  export default {
    name: "Ofertas",
    created() {
      this.listarOfertas().then(() => {
        this.listarOfertasPorCategoria();
      });
    },
    methods: {
      ...mapActions([
        'listarOfertas',
        'listarOfertasPorCategoria'
      ]),
    },
    computed: {
      ...mapGetters([
        'ofertasPorCategoria'
      ]),
      ...mapGetters([
        'carregando'
      ])
    }
  }
</script>

