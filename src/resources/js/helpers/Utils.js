
/**
 * Formata um valor numérico para uma string em formato monetário de reais
 * @param {String} value Valor a ser formatado
 */
export function formatPrice(value) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    })

    return formatter.format(value)
}

/**
 * Calcula a porcentagem de disconto
 * @param {Number} totalPrice Preço cheio (valor de mercado)
 * @param {Number} reducedPrice Preço reduzido (valor do barato coletivo)
 */
export function percentageDiscount(totalPrice, reducedPrice) {
    return Math.abs(
        Math.ceil(
            ((reducedPrice / totalPrice) * 100) - 100
        )
    )
}

function expirationDate(value) {
    return value.length > 2 ?
        (value.slice(0, 2) + '/' + value.slice(2)) :
        value
}

export const InputMasks = {
    expirationDate
}
