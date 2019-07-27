import React from 'react'
import OffersList from './OffersList'
import { OffersConsumer } from '../OffersContext'
import LoadingSpinner from './LoadingSpinner'

function categoriesFrom(offers) {
    return Array.from(
        new Set(offers.map(offer => offer.category))
    )
}

const OffersPage = _ => {
    return (
        <OffersConsumer>
            {providerState => {
                if (providerState.isLoading) {
                    return <LoadingSpinner />
                } else if (providerState.error) {
                    return <p>{providerState.error}</p>
                } else {
                    const categories = categoriesFrom(providerState.data)

                    return (
                        <div id="offers-page" className="container p-0">
                            {categories.map((category, index) =>
                                <OffersList key={index} category={category} data={providerState.data} />
                            )}
                        </div>
                    )
                }
            }}
        </OffersConsumer>
    )
}

export default OffersPage
