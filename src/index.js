
import { products, addUser } from './services/api-service'

const IMG_FALLBACK_SRC = 'https://via.placeholder.com/200x200.jpg'

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

let nextPageNumber = urlParams.get('page') || 1

const populateProductList = (pageNumber) => {
  const container = document.getElementById('products-container')
  products(pageNumber)
    .then(products => (
      container.innerHTML += products && Object.values(products).map(product => (
         productCard(product)
       )).join('')
      )
    )
}

const productCard = (product) => {
  const { count, value } = product.installments 
  const installments = count && value ? `ou ${count}x de ${currencyFormat(value)}` : ''
  const hasDiscount = product.oldPrice > product.price
  return (
    `<div id="pid-${product.id}" class="card">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='${IMG_FALLBACK_SRC}'" class="product-img">
        <p>${product.name}</p>
        <p>${product.description}</p>
        <p>${hasDiscount && 'De: ' + currencyFormat(product.oldPrice)}</p>
        <p class="price">${hasDiscount && 'Por: '}${currencyFormat(product.price)}</p>
        <p>${installments}</p>
        <button class="addtocart button">Comprar</button>
    </div> `
  )
}

const currencyFormat = (price, locale = 'pt-BR', currency = 'BRL') => (
  price && price.toLocaleString(locale, {
    currency,
    style: 'currency'
  }) 
)

const loadNextPage = () => {
  updateQueryString('page', nextPageNumber)
  populateProductList(nextPageNumber)
  nextPageNumber++
}

const updateQueryString = (key, value) => {
  if ('URLSearchParams' in window) {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set(key, value)
    const newPath = window.location.pathname + '?' + searchParams.toString()
    history.pushState(null, '', newPath)
  }
}

const submitNewsletter = (e) => {
  e.preventDefault()
  const form = e.target
  const submitBtn = form.querySelector('input[type=submit')
  if (form.checkValidity()) {
    submitBtn.value = '... Salvando'
    const newsletterUser = { 
      'name': form.name.value, 
      'email' : form.email.value 
    }
    addUser(newsletterUser)
      .then(() => submitBtn.value = 'Usuário salvo! :)')
  }
}

window.onload = () => {
  const newsletterForm = document.getElementById('newsletter-form')
  const nextPageBtn = document.getElementById('next-page')

  newsletterForm.onsubmit = (e) => submitNewsletter(e)
  nextPageBtn.onclick = () => loadNextPage()

  loadNextPage()
}