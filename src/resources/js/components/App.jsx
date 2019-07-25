import React from 'react'
import Header from './Header'

const App = props => {
    return (
        <React.Fragment>
            <Header />
            {props.children}
        </React.Fragment>
    )
}

export default App
