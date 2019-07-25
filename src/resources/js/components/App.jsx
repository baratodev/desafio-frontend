import React, { Component } from 'react'
import APIManager from '../helpers/APIManager'
import OffersList from './OffersList'
import Header from './Header'

const manager = new APIManager()

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <OffersList provider={manager} />
            </div>
        )
    }
}
