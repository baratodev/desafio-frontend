<template>
  <div class="home container">
    <Heading text="Ofertas" />
    <input type="text" class="home__search" v-model="search" placeholder="Search ..." />
    <div class="home__offers">
      <div class="home__offer" v-for="offer in filteredOffers" :key="offer.id">
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
import Heading from "@/components/Heading";

export default {
  name: "home",
  components: {
    Heading
  },
  data() {
    return {
      offers: [],
      search: ""
    };
  },
  computed: {
    filteredOffers() {
      return this.offers.filter(offer =>
        offer.title.toLowerCase().includes(this.search.toLowerCase())
      );
    }
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
