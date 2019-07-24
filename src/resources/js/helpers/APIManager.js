import axios from "axios";

export default class APIManager {

    constructor() {
        this.instance = axios.create({
            baseURL: 'https://playground.barato.com.br/desafio-front/api',
            method: 'get'
        })
    }

    async getOffers() {
        const offers = await this.makeRequest('/offers')

        return Promise.all(
            offers.map(offer => this.makeRequest(`/offer/${offer.id}`))
        )
    }

    async makeRequest(url) {
        const responde = await this.instance.get(url)
        return responde.data
    }
}
