<template>
  <md-card>
    <md-card-area>
      <md-card-media>
        <router-link :to="`/oferta/${$props.oferta.id}`" v-on:click="pegar()">
          <img :src="$props.oferta.image.url" :alt="$props.oferta.title" class="md-image">
        </router-link>
      </md-card-media>

      <md-card-header>
        <div v-show="$props.oferta.market_price !== $props.oferta.price" class="md-subhead">
          <del>R$ {{ parseFloat($props.oferta.market_price).toFixed(2) }}</del>
        </div>
        <div class="md-title">
          R$ {{ parseFloat($props.oferta.price).toFixed(2) }}
        </div>
      </md-card-header>

      <md-card-content>
        {{ $props.oferta.title }}
      </md-card-content>
    </md-card-area>

    <md-card-actions>
      <md-button class="md-accent" v-on:click="adicionarAoCarrinho($props.oferta), mostrarMensagem = true">
        Adicionar ao carrinho
        <md-icon>shopping_cart</md-icon>
      </md-button>
    </md-card-actions>

    <md-snackbar md-position="center" :md-duration="6000" :md-active.sync="mostrarMensagem" md-persistent>
      <span>Item adicionado ao carrinho</span>
      <md-button class="md-accent" @click="mostrarMensagem = false">Fechar</md-button>
    </md-snackbar>
  </md-card>
</template>

<script>
  import {mapMutations} from 'vuex';
  import {types} from '../../store/mutations';

  export default {
    name: "Item",
    props: {
      oferta: {
        title: null,
        image: {
          url: null
        }
      }
    },
    data: () => ({
      mostrarMensagem: false,
    }),
    methods: {
      ...mapMutations([
        types.ADICIONAR_AO_CARRINHO,
        types.PEGAR_OFERTA,
      ]),
      pegar() {
        this.pegarOferta(this.$props.oferta);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-card {
    margin-bottom: 20px;

    .md-card-media {
      display: flex;
      max-height: 200px;
      align-items: center;
      overflow: hidden;
    }

  }

  .md-card-actions {
    justify-content: center;
  }
</style>