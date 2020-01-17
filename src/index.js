import { ADDTOCART_TEXT, IMG_FALLBACK_SRC} from './constants'
import { products } from './services/api-service'
import { currencyFmt } from './utils' 

const hasDiscount = ({ oldPrice, price }) => oldPrice && price && oldPrice > price

const installments = ({ installments }) => (
  installments && installments.count && installments.value 
    ? `ou ${installments.count}x de ${priceFmt(installments.value)}`
    : ''
)

const populateProductList = page => {
  const productContainer = document.getElementById('products-container')
  products(page)
    .then(products =>
      productContainer.innerHTML = products && Object.values(products).map(p =>
        `
          <div id="pid-${p.id}" class="card">
            <img src="${p.image}" alt="${p.name}" onerror="this.src='${IMG_FALLBACK_SRC}'" class="product-img">
            <p>${p.name}</p>
            <p>${p.description}</p>
            <p>${hasDiscount(p) && 'De: ' + priceFmt(p.oldPrice)}</p>
            <p class="price">${hasDiscount(p) && 'Por: '}${currencyFmt(p.price)}</p>
            <p>${installments(p)}</p>
            <button class="addtocart button">${ADDTOCART_TEXT}</button>
          </div>
        `
      ).join('')
    )
}

window.onload = () => populateProductList(0)