import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Offer from "./views/Offer.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/offer/:id",
			name: "offer",
			component: Offer,
			props: true
		}
	]
});
