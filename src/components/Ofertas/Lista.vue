<template>
  <div class="md-layout">
    <div
      class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100"
      v-for="oferta in $props.ofertas"
      :key="oferta.id"
    >
      <bc-item-oferta :oferta="oferta" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "Lista",
    props: {
      ofertas: [],
    }
  }
</script>