<template>
  <bc-layout>

    <div class="md-layout md-alignment-center">
      <div class="md-layout-item md-size-100">
        <h1 class="md-display-2">Ofertas imperdíveis bem perto de você!</h1>
        <h2 class="md-headline">Encontre já uma oferta que cabe no seu bolso</h2>
      </div>
      <div class="md-layout-item md-large-size-75 md-small-size-100">
        <md-field>
          <label>Buscar ofertas...</label>
          <md-input v-model="filtro"></md-input>
        </md-field>
      </div>
    </div>

    <section v-show="!!encontrar(item.ofertas)" class="md-categoria" v-for="item in ofertasPorCategoria">

      <h2>{{ item.categoria }}</h2>
      <bc-lista-ofertas :ofertas="filtrar(item.ofertas)" />

    </section>

  </bc-layout>
</template>

<script>
  import {mapActions, mapGetters, mapMutations} from 'vuex';
  import api from '../api';

  export default {
    name: "Ofertas",
    data: () => ({
      filtro: ''
    }),
    created() {
      if (this.ofertasPorCategoria.length === 0) {
        this.listarOfertas().then(() => {
          this.listarOfertasPorCategoria();
        });
      }
    },
    methods: {
      ...mapActions([
        'listarOfertas',
        'listarOfertasPorCategoria'
      ]),
      encontrar(ofertas) {
        const regexp = new RegExp(this.filtro, 'gmi');

        return ofertas.find(oferta => regexp.test(oferta.title) || regexp.test(oferta.description))
      },
      filtrar(ofertas) {
        const regexp = new RegExp(this.filtro, 'gmi');

        return ofertas.filter(oferta => regexp.test(oferta.title) || regexp.test(oferta.description));
      }
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

<style lang="scss" scoped>

  .md-layout {

    &.md-alignment-center {
      text-align: center;
    }

  }

  .md-field.md-theme-bc-dark:before {
    background-color: white;
  }

  .md-field.md-theme-bc-dark.md-focused {
    label,
    .md-input {
      color: white;
    }
  }

</style>