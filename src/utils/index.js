export const currencyFmt = (price, locale = 'pt-BR', currency = 'BRL') => (
  price && price.toLocaleString(locale, {
    currency,
    style: 'currency'
  }) 
)
