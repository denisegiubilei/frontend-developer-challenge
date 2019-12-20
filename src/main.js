const API_ENDPOINT = 'https://frontend-intern-challenge-api.iurykrieger.now.sh'
const LOCALE = 'pt-BR'
const CURRENCY = 'BRL'
const ADDTOCART_TEXT = 'Comprar'

window.onload = () => {
  populateProductList(0)
}

const fetchProducts = page => (
  fetch(`${API_ENDPOINT}/products`, {
    qs: {
      page: page
    }
  })
  .then(response => response.json())
  .then(data => data && data.products)
  .catch(err => console.error(err))
)

const priceFmt = price => price && price.toLocaleString(LOCALE, {
  style: 'currency',
  currency: CURRENCY
})

const hasDiscount = (oldPrice, price) => oldPrice && price && oldPrice > price

const hasInstallments = installments => installments && installments.count && installments.value

const populateProductList = page => {
  const productContainer = document.getElementById('products-container')
  fetchProducts(page)
    .then(products =>
      productContainer.innerHTML = products && Object.values(products).map(p =>
        `
          <div id="pid-${p.id}" class="card">
            <img src="${p.image}" alt="${p.name}" class="product-img" onerror="this.src='https://via.placeholder.com/200x200.jpg'">
            <p>${p.name}</p>
            <p>${p.description}</p>
            <p>${hasDiscount(p.oldPrice, p.price) ? 'De: ' + priceFmt(p.oldPrice) : ''}</p>
            <p class="price">${hasDiscount(p.oldPrice, p.price) ? 'Por: ' : ''}${priceFmt(p.price)}</p>
            <p>
              ${hasInstallments(p.installments) ? 'ou ' + p.installments.count + 'x de ' + priceFmt(p.installments.value) : ''}
            </p>
            <button class="addtocart button">${ADDTOCART_TEXT}</button>
          </div>
        `
      ).join('')
    )
}