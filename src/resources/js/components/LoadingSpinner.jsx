import React from 'react'

const LoadingSpinner = _ => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border m-5" role="status">
                <span className="sr-only">Carregando...</span>
            </div>
        </div>
    )
}

export default LoadingSpinner
