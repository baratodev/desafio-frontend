import React, { Component, Fragment } from 'react';
import { InputMasks } from '../helpers/Utils';

export default class PaymentForm extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    maskValue(name, value) {
        switch (name) {
            case 'expiration':
                return InputMasks.expirationDate(value)
            default:
                return value
        }
    }

    handleChange(event) {
        const value = event.target.value
        const name = event.target.name

        console.log(value, name)
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Fragment>
                <h2 className="payment-form-title">Pagamento</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="cc-number-input">Cartão de crédito</label>
                        <input type="number"
                            name="number"
                            id="cc-number-input"
                            className="form-control"
                            onChange={this.handleChange}
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cc-name-input">Nome no Cartão</label>
                        <input type="text"
                            name="name" id="cc-name-input"
                            className="form-control"
                            onChange={this.handleChange}
                            required />
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            <label htmlFor="cc-expiration-inputt">Validade</label>
                            <input type="text"
                                name="expiration"
                                id="cc-expiration-input"
                                className="form-control"
                                placeholder="MM/YY"
                                onChange={this.handleChange}
                                required />
                        </div>
                        <div className="form-group col">
                            <label htmlFor="cc-cvc-input">Código de segurança</label>
                            <input type="number"
                                name="cvc"
                                id="cc-cvc-input"
                                className="form-control"
                                placeholder="XXX"
                                onChange={this.handleChange}
                                required />
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                            <i className="fas fa-money-bill"></i>
                            <span>Pagar agora</span>
                        </button>
                    </div>
                </form>
            </Fragment>
        );
    }
}
