import React from 'react'
import PaymentForm from './PaymentForm'

const PaymentPage = _ => {
    return (
        // <OffersConsumer>
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
                                <li className="shopping-cart-item">
                                    <p className="shopping-cart-item-title">1x Nome do item</p>
                                    <p className="shopping-cart-item-price">preco do item</p>
                                </li>
                                <li className="shopping-cart-item-fullprice">
                                    <hr />
                                    <p>Total: 123.00</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </OffersConsumer>
    )
}

export default PaymentPage
