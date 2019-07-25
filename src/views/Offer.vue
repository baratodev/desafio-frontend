<template>
  <div class="container">
    <div class="offer">
      <carousel :perPage="1" paginationColor="#4e1b5a" paginationActiveColor="#f0b72a">
        <slide v-for="(slide, index) in offer.images" :key="index">
          <img :src="slide.url" alt="Slide" class="offer__image" />
        </slide>
      </carousel>
      <div>
        <h2 class="offer__title">{{ offer.title }}</h2>
        <span class="offer__price">{{ offer.price | formatPrice }}</span>
        <button class="btn">comprar</button>
      </div>
    </div>
    <div class="info">
      <Title text="Descrição do Produto" />
      <p v-html="offer.description" class="info__text"></p>
      <p>
        <span class="info__category">Categoria:</span>
        {{ offer.category }}
      </p>
    </div>
  </div>
</template>

<script>
import api from "@/service";
import { Carousel, Slide } from "vue-carousel";
import Title from "@/components/Title";

export default {
  name: "offer",
  props: ["id"],
  components: {
    Carousel,
    Slide,
    Title
  },
  data() {
    return {
      offer: {}
    };
  },
  async created() {
    const { data } = await api.get(`/offer/${this.id}`);
    this.offer = data;
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/offer.scss";
</style>
