<template>
  <bc-layout>

    <div class="md-layout md-alignment-top-center md-gutter">

      <div class="md-layout-item md-large-size-40 md-small-size-100">
        <h2>Pagamento</h2>

        <div class="md-layout md-gutter">

          <div class="md-layout-item md-size-100">
            <md-field>
              <label>Cartão</label>
              <md-input v-model="cartao" v-mask="'#### #### #### ####'"/>
            </md-field>
          </div>

          <div class="md-layout-item md-size-100">
            <md-field>
              <label>Nome impresso</label>
              <md-input v-model="nome"/>
            </md-field>
          </div>

          <div class="md-layout-item md-large-size-50 md-size-100">
            <md-field>
              <label>Validade</label>
              <md-input v-model="validade" v-mask="'##/##'"/>
            </md-field>
          </div>

          <div class="md-layout-item md-large-size-50 md-size-100">
            <md-field>
              <label>Cod. segurança</label>
              <md-input v-model="codigo" v-mask="'###'"/>
            </md-field>
          </div>

          <div class="md-layout-item md-size-100">

            <div class="md-layout">
              <md-button class="md-layout-item md-size-100 md-accent md-raised" v-on:click.prevent="pagar()">
                Pagar agora <md-icon>payment</md-icon>
              </md-button>
            </div>

          </div>


        </div>

      </div>
      <div class="md-layout-item md-large-size-40 md-small-size-100">
        <h2>Resumo da compra</h2>

        <md-list>

          <bc-item-carrinho v-for="item in itensCarrinho" :item="item" :key="item.id" />

          <md-divider />

          <bc-total-carrinho />

        </md-list>

      </div>

      <md-snackbar md-position="center" :md-duration="6000" :md-active.sync="mostrarAlerta" md-persistent>
        <span>Pagamento realizado com sucesso!</span>
        <md-button class="md-accent" @click="mostrarAlerta = false">Fechar</md-button>
      </md-snackbar>

    </div>

  </bc-layout>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';

  import {types} from '../store/mutations';

  export default {
    name: "Carrinho",
    data: () => ({
      cartao: '',
      nome: '',
      validade: '',
      codigo: '',
      mostrarAlerta: false
    }),
    methods: {
      ...mapMutations([
        types.LIMPAR_CARRINHO
      ]),
      pagar() {
        this.limparCarrinho();
        this.cartao = '';
        this.nome = '';
        this.validade = '';
        this.codigo = '';
        this.mostrarAlerta = true;
      }
    },
    computed: {
      ...mapGetters({
        itensCarrinho: 'itensUnicosCarrinho'
      })
    }
  }
</script>

<style lang="scss" scoped>

  .md-layout.md-gutter {
    max-width: 100%;
  }

</style>