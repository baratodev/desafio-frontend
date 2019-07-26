import React, { Component } from 'react'
import { OffersConsumer } from '../OffersContext';
import LoadingSpinner from './LoadingSpinner';

const OfferDetailsContent = props => {
    const { title, description, price, marketPrice } = props

    return (
        <div className="container px-0">
            <section className="offer-details-header row">
                <div className="col-md-7 col-sm-10">
                    <img className="img-responsive" src="" alt="" />
                </div>
                <div className="col-md-5 col-sm-10">
                    <h1>{title}</h1>
                    <p>{price}</p>
                    <a href="" className="btn">Comprar</a>
                </div>
            </section>
            <section className="offer-details-description row">
                <h2>Detalhes da oferta:</h2>
                <p dangerouslySetInnerHTML={{__html: description}} />
            </section>
        </div>
    )
}

export default class OfferDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { offerID } = this.props.match.params

        return (
            <OffersConsumer>
                {providerState => {
                    const offer = providerState.data.find(offer => offer.id == offerID)

                    if (offer) {
                        console.log(offer.images)
                        return (
                            <OfferDetailsContent
                                title={offer.title}
                                description={offer.description}
                                price={offer.price}
                            />
                        )
                    } else {
                        return <LoadingSpinner />
                    }
                }}
            </OffersConsumer>
        )
    }
}
