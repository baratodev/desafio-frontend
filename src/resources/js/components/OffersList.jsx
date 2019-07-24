import React, { Component } from "react"
import OfferListItem from "./OfferListItem"

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
            return <p>Loading...</p>
        }

        if (error) {
            return <p>{ error }</p>
        }

        return (
            <div className="row">
                {data.map(offer =>
                    <OfferListItem
                        key={offer.id}
                        title={offer.title}
                        price={offer.price}
                        marketPrice={offer.market_price}
                        imageURL={offer.images[0].url}
                    />
                )}
            </div>
        )
    }

}
