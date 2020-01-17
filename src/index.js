import { products } from './services/ApiService'

import { currencyFmt } from './utils' 

const ADDTOCART_TEXT = 'Comprar'
const IMG_FALLBACK_SRC = 'https://via.placeholder.com/200x200.jpg'

window.onload = () => {
  populateProductList(0)
}

const populateProductList = page => {
  const productContainer = document.getElementById('products-container')
  products(page)
    .then(products =>
      productContainer.innerHTML = products && Object.values(products).map(p =>
        `
          <div id="pid-${p.id}" class="card">
            <img src="${p.image}" alt="${p.name}" class="product-img" onerror="this.src='${IMG_FALLBACK_SRC}'">
            <p>${p.name}</p>
            <p>${p.description}</p>
            <p>${hasDiscount(p.oldPrice, p.price) && 'De: ' + priceFmt(p.oldPrice)}</p>
            <p class="price">${hasDiscount(p.oldPrice, p.price) ? 'Por: ' : ''}${currencyFmt(p.price)}</p>
            <p>
              ${hasInstallments(p.installments) && 'ou ' + p.installments.count + 'x de ' + priceFmt(p.installments.value)}
            </p>
            <button class="addtocart button">${ADDTOCART_TEXT}</button>
          </div>
        `
      ).join('')
    )
}