<template>
  <md-card>
    <md-card-area>
      <md-card-media>
        <img :src="$props.oferta.image.url" :alt="$props.oferta.title" class="md-image">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Actions left aligned</div>
        <div class="md-subhead">Subtitle here</div>
      </md-card-header>

      <md-card-content>
        {{ $props.oferta.title }}
      </md-card-content>
    </md-card-area>

    <md-card-actions md-alignment="left">
      <md-button class="md-accent" v-on:click="adicionarAoCarrinho($props.oferta)">
        Adicionar ao carrinho
        <md-icon>shopping_cart</md-icon>
      </md-button>
    </md-card-actions>
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
    methods: {
      ...mapMutations([
        types.ADICIONAR_AO_CARRINHO
      ])
    }
  }
</script>