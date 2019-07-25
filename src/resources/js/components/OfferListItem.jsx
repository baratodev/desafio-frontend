import React from 'react'
import { formatPrice } from '../helpers/Formatters'

const OfferListItem = props => {
    const { title, price, marketPrice, imageURL } = props

    return (
        <div className="card col-md-3 px-0">
            <img src={imageURL} alt="" className="card-img-top" />
            <div className="card-body">
                <h6 className="card-title">{title}</h6>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item ">
                    <p className="market-price">de {formatPrice(marketPrice)}</p>
                </li>
                <li className="list-group-item">
                    <p className="current-price">por R$ {formatPrice(price)}</p>
                </li>
            </ul>
            <div className="card-footer text-center">
                <a href="#" className="btn btn-primary btn-lg">Comprar</a>
            </div>
        </div>
    )
}

export default OfferListItem
