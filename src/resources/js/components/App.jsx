import React, { Component } from 'react'
import APIManager from '../helpers/APIManager'
import OffersList from './OffersList'

const manager = new APIManager()

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <OffersList provider={manager} />
            </div>
        )
    }
}
