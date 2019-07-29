import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

/**
 * Componente para o Header
 */
const Header = _ => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img className="img-fluid" src={logo} alt="Barato Coletivo" />
                </Link>
                <Link to="/payment" className="btn btn-primary btn-lg my-2 my-sm-0" type="submit">
                    <i className="fas fa-shopping-cart"></i>
                    <span>Meu Carrinho</span>
                </Link>
            </div>
        </nav>
    )
}

export default Header
