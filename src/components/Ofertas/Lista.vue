<template>
  <div>
    <bc-item-oferta v-for="oferta in $props.ofertas" :oferta="oferta" :key="oferta.id"/>
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