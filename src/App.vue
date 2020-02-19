<template>
  <div id="app">
    <Toolbar />
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar";

export default {
  name: "app",
  components: {
    Toolbar
  }
};
</script>


<style lang="scss">
@import "~vue-ionicons/ionicons.scss";
@import "@/assets/reset.scss";
</style>
