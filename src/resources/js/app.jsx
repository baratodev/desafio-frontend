/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
require('./bootstrap')

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import APIManager from './helpers/APIManager'
import App from './components/App'
import OffersList from './components/OffersList'
import OfferDetails from './components/OfferDetails'

const manager = new APIManager()

ReactDOM.render(
    <App>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={_ => <OffersList provider={manager} />} />
                <Route path="/offer/:offerID" component={OfferDetails} />
            </Switch>
        </BrowserRouter>
    </App>,
    document.getElementById('app')
)
