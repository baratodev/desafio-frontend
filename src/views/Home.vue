<template>
  <div class="home container">
    <Title text="Ofertas" />
    <div class="home__offers">
      <div class="home__offer" v-for="offer in offers" :key="offer.id">
        <router-link class="cursor" tag="div" :to="{ name: 'offer', params: { id: offer.id } }">
          <img class="home__thumbnail" :src="offer.image.url" :alt="offer.title" />
        </router-link>
        <h2 class="home__subtitle">{{ offer.title | excerpt }}</h2>
        <span class="home__price">{{ offer.price | formatPrice }}</span>
        <button class="btn">comprar</button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/service";
import Title from "@/components/Title";

export default {
  name: "home",
  components: {
    Title
  },
  data() {
    return {
      offers: []
    };
  },
  async created() {
    const { data } = await api.get("/offers");
    this.offers = data;
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/home.scss";
</style>
