import React, { Component } from 'react'
import { OffersConsumer } from '../OffersContext'
import LoadingSpinner from './LoadingSpinner'
import { formatPrice, percentageDiscount } from '../helpers/Utils'

const ImageCarousel = props => {
    const { images } = props

    // Para quando alguma imagem não for carregada. O elemento será removido do DOM.
    const onImageBrokenError = error => error.target.parentNode.style.display = 'none'

    return (
        <div id="images-carousel" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
                {images.map((image, index) => (
                    <div key={index} className={"carousel-item h-100" + (index === 0 ? " active" : "")}>
                        <img src={image.url}
                            alt={`Imagem da oferta ${index}`}
                            className="carousel-image d-block w-100 h-100"
                            onError={onImageBrokenError}
                        />
                    </div>
                ))}
            </div>
            <ol className="carousel-indicators">
                {images.map((image, index) => (
                    <li key={index}
                        data-target="#images-carousel"
                        data-slide-to={index}
                        className={index === 0 ? "active" : ""}
                    >
                        <img src={image.url}
                            alt={`Thumbnail da imagem ${index}`}
                            className="d-block w-100 img-fluid"
                            onError={onImageBrokenError}
                        />
                    </li>
                ))}
            </ol>
        </div>
    )
}

const OfferDetailsContent = props => {
    const { title, description, price, marketPrice, images } = props

    return (
        <div className="offer-details container px-0">
            <section className="offer-details-header">
                <div className="row">
                    <h1 className="offer-details-title">{title}</h1>
                </div>
                <div className="row">
                    <div className="col-md-7 col-sm-10">
                        <ImageCarousel images={images} />
                    </div>
                    <div className="col-md-5 col-sm-10">
                        <div className="container-fluid">
                            <div className="offer-details-prices-box">
                                <p className="market-price">de {formatPrice(marketPrice)}</p>
                                <p className="current-price">por {formatPrice(price)}</p>
                                <small className="price-discount">
                                    Desconto de {percentageDiscount(marketPrice, price)}%
                                </small>
                            </div>
                            <a href="" className="btn btn-primary btn-lg">Comprar</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="offer-details-description row">
                <div className="container-fluid">
                    <h2 className="offer-details-title">Detalhes da oferta</h2>
                    <hr />
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </section>
        </div>
    )
}
/**
 * Componente para a página de detalhes de uma oferta específica.
 *
 * Ele é composto por outro dois elementos que foram extraídos apenas para modularizar e não
 * ficar uma classe tão grande. Recebe pela o ID da oferta via parâmetros da rota e utiliza isso
 * para obter o objeto completo referente aquela oferta no conjunto completo disponibilidado no
 * contexto.
 */
export default class OfferDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { offerID } = this.props.match.params

        return (
            <OffersConsumer>
                {providerState => {
                    const offer = providerState.data.find(offer => offer.id == offerID)

                    if (offer) {
                        return (
                            <OfferDetailsContent
                                title={offer.title}
                                description={offer.description}
                                price={offer.price}
                                marketPrice={offer.market_price}
                                images={offer.images}
                            />
                        )
                    } else {
                        return <LoadingSpinner />
                    }
                }}
            </OffersConsumer>
        )
    }
}
