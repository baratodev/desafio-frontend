import React from 'react'
import PaymentForm from './PaymentForm'
import { OffersConsumer } from '../OffersContext'
import { formatPrice } from '../helpers/Utils';

function calculateTotalPrice(offers) {
    return offers.map(offer => Number(offer.price)).reduce((sum, value) => sum += value, 0)
}

const PaymentPage = _ => {
    return (
        <OffersConsumer>
            {(providerState) => {
                return (
                    <div id="payment-page" className="container p-0">
                        <div className="row">
                            <div className="col-md-7 col-sm-10">
                                <div className="container-fluid">
                                    <PaymentForm />
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-10">
                                <div className="shopping-cart container-fluid">
                                    <h2>Resumo da Compra</h2>
                                    <div className="container px-0">
                                        <ul className="shopping-cart-items">
                                            {providerState.shoppingCart.map((offer, index) => {
                                                return (
                                                    <li key={index} className="shopping-cart-item">
                                                        <p className="shopping-cart-item-title">{offer.title}</p>
                                                        <p className="shopping-cart-item-price">{formatPrice(offer.price)}</p>
                                                    </li>
                                                )
                                            })}
                                            <li className="shopping-cart-item-fullprice">
                                                <hr />
                                                <p>Total: {formatPrice(calculateTotalPrice(providerState.shoppingCart))}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }}
        </OffersConsumer>
    )
}

export default PaymentPage
