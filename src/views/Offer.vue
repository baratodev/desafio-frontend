<template>
	<div class="container">
		<div class="offer">
			<carousel
				:perPage="1"
				paginationColor="#4e1b5a"
				paginationActiveColor="#f0b72a"
			>
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
	</div>
</template>

<script>
import api from "@/service";
import { Carousel, Slide } from "vue-carousel";

export default {
	name: "offer",
	props: ["id"],
	components: {
		Carousel,
		Slide
	},
	data() {
		return {
			offer: {}
		};
	},
	async created() {
		const { data } = await api.get(`/offer/${this.id}`);
		let images = data.images.splice(0, data.images.length - 1);
		this.offer = { ...data, images };
	}
};
</script>

<style lang="scss" scoped>
.offer {
	margin-top: 40px;
	margin-bottom: 40px;
	display: grid;
	grid-template-columns: 60% 40%;
	grid-gap: 30px;

	@media (max-width: 767px) {
		grid-template-columns: 1fr;
	}

	&__image {
		height: 400px;
		width: 100%;
	}

	&__title{
		font-weight: bold;
		margin-bottom: 15px;
	}

	&__price{
		display: block;
		font-size: 2rem;
		font-weight: bold;
		color: var(--color-btn);
		margin-bottom: 15px;
	}
}
</style>
