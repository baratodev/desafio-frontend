import React from 'react'
import OfferListItem from './OfferListItem'

function offersFromCategory(category, offers) {
    return offers.filter(offer => offer.category === category)
}

const OffersList = ({ category, data }) => {
    const offers = offersFromCategory(category, data)

    return (
        <div className="offers-list container-fluid">
            <h2 className="offers-list-title">{category}</h2>
            <hr/>
            <div className="row">
                {offers.map(offer =>
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

export default OffersList
