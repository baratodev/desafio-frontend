import React, { Component } from 'react'
import OfferListItem from './OfferListItem'
import LoadingSpinner from './LoadingSpinner'
import { OffersConsumer } from '../OffersContext';

const OffersList = _ => {
    return (
        <OffersConsumer>
            {providerState => {
                if (providerState.isLoading) {
                    return <LoadingSpinner />
                } else if (providerState.error) {
                    return <p>{providerState.error}</p>
                } else {
                    return (
                        <div className="container px-0">
                            <div className="offers-list row">
                                {providerState.data.map(offer =>
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
            }}
        </OffersConsumer>
    )
}

export default OffersList
