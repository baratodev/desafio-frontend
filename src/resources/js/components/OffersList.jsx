import React from 'react'
import OfferListItem from './OffersListItem'

function offersFromCategory(category, offers) {
    return offers.filter(offer => offer.category === category)
}

/**
 * Componente para uma lista de ofertas
 *
 * Recebe uma categoria e um conjunto de dados. Dessa forma, filtra e exibe somente as
 * ofertas de determinada categoria. Utiliza o componente `OffersListItem` para exibir um item
 * da listagem.
 * @param {React.Props} props
 */
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
