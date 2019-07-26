<template>
  <bc-layout>

    <section class="md-categoria" v-for="item in ofertasPorCategorias">

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
    data: () => ({
      ofertasPorCategorias: [],
    }),
    created() {
      this.listarOfertas();
    },
    methods: {
      ...mapActions([
        'listarOfertas'
      ]),
      ...mapMutations([
        'carregando'
      ])
    },
    computed: {
      ...mapGetters([
        'ofertas'
      ]),
      ...mapGetters({
        estaCarregando: 'carregando'
      })
    },
    watch: {
      ofertas() {
        if (this.ofertas.length > 0) {
          this.carregando(true);

          const promises = this.ofertas.map(oferta => api.get(`/offer/${oferta.id}`));

          Promise.all(promises)
            .then(responses => responses.map(res => res.data))
            .then(ofertas => {
              let ofertasPorCategorias = ofertas.reduce((obj, oferta) => {
                if (!Array.isArray(obj[oferta.category])) obj[oferta.category] = [];

                obj[oferta.category].push(oferta);

                return obj;
              }, {});

              this.ofertasPorCategorias = Object.keys(ofertasPorCategorias).map(categoria => ({
                categoria,
                ofertas: ofertasPorCategorias[categoria]
              }));
              this.carregando(false);
            })
        }
      }
    }
  }
</script>

