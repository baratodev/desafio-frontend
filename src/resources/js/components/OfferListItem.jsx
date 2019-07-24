import React from "react"

const OfferListItem = props => {
    const { title, price, marketPrice, imageURL } = props

    return (
        <div className="card col-md-4">
            <img src={ imageURL } alt="" className="card-img-top img-responsive"/>
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <h6 className="card-text market-price">R$ { marketPrice }</h6>
                <h6 className="card-text current-price">R$ { price }</h6>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    )
}

export default OfferListItem
