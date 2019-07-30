<template>
  <bc-layout>
    <div v-show="!!oferta" class="md-layout md-gutter">

      <div class="md-layout-item md-large-size-60 md-small-size-100 bc-coluna-slide">
        <carousel class="bc-imagens-oferta" :perPage="1" :navigationEnabled="true">
          <slide v-for="imagem in oferta.images" :key="imagem.url">
            <md-image>
              <img :src="imagem.url" :alt="oferta.title">
            </md-image>
          </slide>
        </carousel>
      </div>

      <div class="md-layout-item md-large-size-40 md-small-size-100 bc-descricao-oferta">
        <h1>{{ oferta.category }}</h1>
        <p>{{ oferta.title }}</p>
        <h2 class="md-display-1">R$ {{ parseFloat(oferta.price).toFixed(2) }}</h2>

        <md-button class="md-accent md-raised" v-on:click.prevent="adicionarAoCarrinho(oferta), mostrarMensagem = true">
          Adicionar ao carrinho <md-icon>shopping_cart</md-icon>
        </md-button>
      </div>

    </div>


    <div class="md-layout md-gutter">

      <div class="md-layout-item md-large-size-50 md-small-size-100">
        <h2>Detalhes da oferta</h2>
        <p v-html="oferta.description"></p>
      </div>
      <div class="md-layout-item md-large-size-50 md-small-size-100">

      </div>

    </div>

    <md-snackbar md-position="center" :md-duration="6000" :md-active.sync="mostrarMensagem" md-persistent>
      <span>Item adicionado ao carrinho</span>
      <md-button class="md-accent" @click="mostrarMensagem = false">Fechar</md-button>
    </md-snackbar>

  </bc-layout>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex';

  import {types} from '../store/mutations';

  export default {
    name: "Oferta",
    data: () => ({
      mostrarMensagem: false,
    }),
    created() {
      if (!this.oferta) {
        this.pegarOferta(this.$route.params.id).then(() => {
          this.listarOfertas().then(() => {
            this.pegar({
              ...this.oferta,
              image: this.ofertas.find(oferta => oferta.id === this.oferta.id).image
            });
          });
        });

      }
    },
    methods: {
      ...mapActions([
        'pegarOferta',
        'listarOfertas',
        'listarOfertasPorCategoria'
      ]),
      ...mapMutations([
        types.ADICIONAR_AO_CARRINHO
      ]),
      ...mapMutations({
        pegar: types.PEGAR_OFERTA
      })
    },
    computed: {
      ...mapGetters([
        'oferta',
        'ofertas',
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .md-layout.md-gutter {
    max-width: 100%;
  }

  .md-button.md-raised {
    padding-left: 20px;
    padding-right: 20px;
  }

  .bc-imagens-oferta {
    img {
      width: auto;
      max-height: 300px;
    }

    .md-image {
      background-color: rgba(0,0,0,.25);
    }
  }

  .bc-descricao-oferta {
    text-align: center;
  }
</style>