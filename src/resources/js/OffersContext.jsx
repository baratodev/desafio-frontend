import React, { Component } from 'react'

const OffersContext = React.createContext()

export const OffersConsumer = OffersContext.Consumer

export class OffersProvider extends Component {
    constructor(props) {
        super(props)

        this.addToCart = this.addToCart.bind(this)

        this.state = {
            data: [],
            shoppingCart: [],
            isLoading: false,
            error: null,
            addToCart: this.addToCart
        }
    }

    addToCart(offer) {
        this.setState({ shoppingCart: this.state.shoppingCart.concat([offer]) })
    }

    componentDidMount() {
        const { networkManager } = this.props

        this.setState({ isLoading: true })

        networkManager.getOffers()
            .then(data => this.setState({ data, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }))
    }

    render() {
        return (
            <OffersContext.Provider value={this.state}>
                {this.props.children}
            </OffersContext.Provider>
        )
    }
}
