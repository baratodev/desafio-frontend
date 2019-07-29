<template>
  <bc-layout>

    <div class="md-layout md-alignment-top-center">

      <div class="md-layout-item md-large-size-40 md-size-100">
        <h2>Pagamento</h2>

        <div class="md-layout">

          <div class="md-layout-item md-size-100">
            <md-field>
              <label>Cartão</label>
              <the-mask mask="#### #### #### ####" class="md-input" />
            </md-field>
          </div>

          <div class="md-layout-item md-size-100">
            <md-field>
              <label>Nome impresso</label>
              <md-input/>
            </md-field>
          </div>

          <div class="md-layout-item md-large-size-50 md-size-100">
            <md-field>
              <label>Validade</label>
              <the-mask mask="##/##" class="md-input" />
            </md-field>
          </div>

          <div class="md-layout-item md-large-size-50 md-size-100">
            <md-field>
              <label>Cod. segurança</label>
              <the-mask mask="###" class="md-input" />
            </md-field>
          </div>

        </div>

      </div>
      <div class="md-layout-item md-large-size-40 md-size-100">
        <h2>Resumo da compra</h2>

        <md-list>

          <md-list-item v-for="item in listarItems()" :key="item.id">

            <span class="bc-imagem-item-carrinho">
              <img :src="item.image.url" :alt="item.title">
            </span>

            <span class="md-list-item-text">
              {{ item.title.substring(0, 45) }}...
            </span>

            X {{ item.quantidade }}
          </md-list-item>

          <md-divider></md-divider>

          <md-list-item>
            <strong>Total:</strong> R$ {{ pegarTotal().toFixed(2).replace('.', ',') }}
          </md-list-item>

        </md-list>

      </div>

    </div>

  </bc-layout>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';

  import {types} from '../store/mutations';

  export default {
    name: "Carrinho",

    methods: {
      ...mapMutations([
        types.REMOVER_DO_CARRINHO
      ]),
      pegarTotal() {
        return this.carrinho.reduce((total, item) => total + parseFloat(item.price), 0);
      },
      listarItems() {
        const itemsUnicos = this.carrinho.reduce((obj, item) => {
          if (!obj[item.id]) obj[item.id] = { quantidade: 0, ...item };

          obj[item.id].quantidade++;

          return obj;
        }, {});
        return Object.values(itemsUnicos);
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
</style>