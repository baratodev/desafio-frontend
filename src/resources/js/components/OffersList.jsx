import React, { Component } from "react"
import OfferListItem from "./OfferListItem"
import LoadingSpinner from "./LoadingSpinner"

export default class OffersList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [],
            isLoading: false,
            error: null
        }
    }

    componentDidMount() {
        const { provider } = this.props

        this.setState({ isLoading: true })

        provider.getOffers()
            .then(data => this.setState({ data, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }))
    }

    render() {
        const { data, isLoading, error } = this.state

        if (isLoading) {
            return <LoadingSpinner />
        }

        if (error) {
            return <p>{error}</p>
        }

        return (
            <div className="container px-0">
                <div className="offers-list row">
                    {data.map(offer =>
                        <OfferListItem
                            key={offer.id}
                            id={offer.id}
                            title={offer.title}
                            price={offer.price}
                            marketPrice={offer.market_price}
                            imageURL={offer.images[0].url}
                        />
                    )}
                </div>
            </div>
        )
    }

}
