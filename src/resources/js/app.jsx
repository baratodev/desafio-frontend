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
import OfferDetails from './components/OfferDetails'
import { OffersProvider } from './OffersContext'
import OffersPage from './components/OffersPage'
import PaymentPage from './components/PaymentPage'

const manager = new APIManager()

ReactDOM.render(
    <BrowserRouter>
        <App>
            <OffersProvider networkManager={manager}>
                <Switch>
                    <Route exact path="/" component={OffersPage} />
                    <Route path="/offer/:offerID" component={OfferDetails} />
                    <Route path="/payment" component={PaymentPage} />
                </Switch>
            </OffersProvider>
        </App>
    </BrowserRouter>,
    document.getElementById('app')
)
