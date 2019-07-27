import React from 'react'
import Header from './Header'
import Footer from './Footer'

/**
 * Compoenente que estrutura a aplicação no geral
 */
const App = props => {
    return (
        <React.Fragment>
            <main className="flex-shrink-0" role="main">
                <div className="container-fluid px-0">
                    <Header />
                    {props.children}
                    <Footer />
                </div>
            </main>
        </React.Fragment>
    )
}

export default App
