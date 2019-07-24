<template>
	<div>
		{{ offer }}
	</div>
</template>

<script>
import api from "@/service";

export default {
	name: "offer",
	props: ["id"],
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
