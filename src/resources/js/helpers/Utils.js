
export function formatPrice(value) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    })

    return formatter.format(value)
}

export function percentageDiscount(totalPrice, reducedPrice) {
    return Math.abs(
        Math.ceil(
            ((reducedPrice / totalPrice) * 100) - 100
        )
    )
}
