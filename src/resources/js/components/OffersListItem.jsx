import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../helpers/Utils'

/**
 * Componente para um item da lista de ofertas
 *
 * @param {React.Props} props
 */
const OfferListItem = ({ id, title, price, marketPrice, imageURL }) => {
    return (
        <div className="col-md-3">
            <div className="card">
                <img src={imageURL} alt="" className="card-img-top" />
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item ">
                        <p className="market-price">de {formatPrice(marketPrice)}</p>
                    </li>
                    <li className="list-group-item">
                        <p className="current-price">por {formatPrice(price)}</p>
                    </li>
                </ul>
                <div className="card-footer text-center">
                    <Link to={`/offer/${id}`} className="btn btn-primary btn-lg">Comprar</Link>
                </div>
            </div>
        </div>
    )
}

export default OfferListItem
