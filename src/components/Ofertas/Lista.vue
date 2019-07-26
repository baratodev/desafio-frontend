<template>
  <ul>
    <li v-for="oferta in $props.ofertas">
      {{ oferta.title }}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "Lista",
    props: {
      ofertas: [],
    }
  }
</script>