import React from 'react'
import logo from '../../images/logo.png'

const Header = _ => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a href="#" className="navbar-brand">
                    <img className="img-responsive" src={logo} alt="Barato Coletivo" />
                </a>
                <button className="btn btn-primary btn-lg my-2 my-sm-0" type="submit">
                    <i className="fas fa-shopping-cart"></i>
                    <span>Meu Carrinho</span>
                </button>
            </div>
        </nav>
    )
}

export default Header
