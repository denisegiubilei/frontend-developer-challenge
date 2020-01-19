import { ADDTOCART_TEXT, IMG_FALLBACK_SRC} from '../utils/constants'
import { currencyFmt } from '../utils' 

const ProductCard = (p) => {
  
  const hasDiscount = p.oldPrice && p.price && p.oldPrice > p.price
  
  const installments = () => (
    p.installments && p.installments.count && p.installments.value
      ? `ou ${p.installments.count}x de ${currencyFmt(p.installments.value)}`
      : ''
  )
  
  return (
    `<div id="pid-${p.id}" class="card">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='${IMG_FALLBACK_SRC}'" class="product-img">
        <p>${p.name}</p>
        <p>${p.description}</p>
        <p>${hasDiscount && 'De: ' + currencyFmt(p.oldPrice)}</p>
        <p class="price">${hasDiscount && 'Por: '}${currencyFmt(p.price)}</p>
        <p>${installments()}</p>
        <button class="addtocart button">${ADDTOCART_TEXT}</button>
    </div> `
  )
}

export { 
  ProductCard 
}