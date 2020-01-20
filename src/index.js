
import { products } from './services/api-service'
import { ProductCard } from './components/ProductCard'

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
let nextPage = urlParams.get('page') || 1

const updateQueryString = (key, value) => {
  if ('URLSearchParams' in window) {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set(key, value)
    const newPath = window.location.pathname + '?' + searchParams.toString()
    history.pushState(null, '', newPath)
  }
}

const populateProductList = (page) => {
  const container = document.getElementById('products-container')
  products(page)
    .then(products => (
      container.innerHTML += products && Object.values(products).map(product => (
         ProductCard(product)
       )).join('')
      )
    )
}

const loadNextPage = () => {
  updateQueryString("page", nextPage)
  populateProductList(nextPage)
  nextPage++
}

window.onload = () => {
  const nextPageBtn = document.getElementById('next-page')
  nextPageBtn.onclick = () => loadNextPage()
  loadNextPage()
}