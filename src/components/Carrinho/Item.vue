<template>
  <md-list-item>

    <span class="bc-imagem-item-carrinho">
      <img :src="item.image.url" :alt="item.title">
    </span>

    <span class="md-list-item-text">
      {{ item.title.substring(0, 45) }}...
    </span>

    <md-button class="bc-acao-item-carrinho md-primary md-icon-button" title="Remover" v-on:click.prevent="remover()">
      <md-icon>remove</md-icon>
    </md-button>

    {{ pegarQuantidade(item.id) }}

    <md-button class="bc-acao-item-carrinho md-primary md-icon-button" title="Adicionar" v-on:click.prevent="adicionar()">
      <md-icon>add</md-icon>
    </md-button>

  </md-list-item>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';

  import {types} from '../../store/mutations';

  export default {
    name: "Item",
    props: {
      item: {
        id: null,
        title: null,
        image: {
          url: null,
        }
      }
    },
    methods: {
      ...mapMutations([
        types.ADICIONAR_AO_CARRINHO,
        types.REMOVER_DO_CARRINHO,
      ]),
      pegarQuantidade(id) {
        return this.carrinho.filter(item => item.id === id).length;
      },
      adicionar() {
        this.adicionarAoCarrinho(this.$props.item);
      },
      remover() {
        const indice = this.carrinho.findIndex(item => item.id === this.$props.item.id);
        this.removerDoCarrinho(indice);
      }
    },
    computed: {
      ...mapGetters([
        'carrinho'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .bc-imagem-item-carrinho {
    display: flex;
    width: 50px;
    height: 50px;
    justify-content: center;
    overflow: hidden;
    margin-right: 15px;

    img {
      max-height: 100%;
      width: auto;
    }
  }

  .bc-acao-item-carrinho {
    margin-left: 10px;
    margin-right: 10px;

    &:hover {
      text-decoration: none;
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
</style>