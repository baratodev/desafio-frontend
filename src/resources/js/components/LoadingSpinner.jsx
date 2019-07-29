import React from 'react'

/**
 * Componente de um spinner de loading
 *
 * É utilizado nas páginas que fazem requisições a API para ter uma
 * resposa visual ao usuário.
 */
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
