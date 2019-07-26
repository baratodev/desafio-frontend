<template>
  <div class="page-container">

    <md-app md-mode="fixed">

      <md-app-toolbar class="md-primary" md-elevation="3">

        <div class="md-toolbar-row">

          <div class="md-toolbar-section-start">
            <router-link to="/" class="md-title">
              <img src="../assets/images/logo.png" alt="Barato Coletivo">
            </router-link>
          </div>

          <div class="md-toolbar-section-end">
            <md-menu md-size="medium" md-align-trigger>
              <md-button md-menu-trigger class="md-icon-button">
                <md-icon>more_vert</md-icon>
              </md-button>

              <md-menu-content>
                <md-menu-item>
                  <md-switch v-model="temaEscuroHabilitado" v-on:click="this.alternarTema()">Tema Noturno</md-switch>
                </md-menu-item>
              </md-menu-content>
            </md-menu>

          </div>

        </div>

      </md-app-toolbar>

      <md-app-content>
        <slot/>
      </md-app-content>

    </md-app>

  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';

  export default {
    name: "Layout",
    created() {
      this.temaEscuroHabilitado = !!this.temaEscuro;
    },
    data() {
      return {
        temaEscuroHabilitado: false
      }
    },
    methods: {
      ...mapMutations([
        'alternarTema'
      ])
    },
    computed: {
      ...mapGetters([
        'temaEscuro'
      ])
    },
    watch: {
      temaEscuroHabilitado() {
        if (this.temaEscuroHabilitado !== !!this.temaEscuro) {
          this.alternarTema();
          this.temaEscuroHabilitado = !!this.temaEscuro;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-title {
    padding-top: 15px;
    padding-bottom: 15px;

    img {
      height: 40px;
    }
  }
</style>