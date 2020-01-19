
import { products } from './services/api-service'
import { ProductCard } from './components/ProductCard'

const populateProductList = page => {
  const container = document.getElementById('products-container')
  products(page)
    .then(products =>
      container.innerHTML = products && Object.values(products).map(product => (
        ProductCard(product)
      )).join('')
    )
}

window.onload = () => populateProductList(0)