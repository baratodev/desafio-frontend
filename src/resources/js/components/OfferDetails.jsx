import React, { Component } from 'react'

export default class OfferDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container px-0">
                <section className="offer-details-header row">
                    <div className="col-md-5 col-sm-10">
                        <img className="img-responsive" src="" alt="" />
                    </div>
                    <div className="col-md-5 col-sm-10">
                        <h1>Nome do produto</h1>
                        <p>Preco</p>
                        <a href="" className="btn">Comprar</a>
                    </div>
                </section>
                <section className="offer-details-description row">
                    <h2>Detalhes da oferta:</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vero rem assumenda laudantium expedita aliquid ipsa nisi excepturi dolores deserunt aut magni praesentium illo, ab eligendi totam repudiandae repellendus illum.</p>
                </section>
            </div>
        )
    }
}
