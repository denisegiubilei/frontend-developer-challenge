const API_ENDPOINT = 'https://frontend-intern-challenge-api.iurykrieger.now.sh'

const products = page => (
  fetch(`${API_ENDPOINT}/products`, {
    qs: { page }
  })
  .then(response => response.json())
  .then(data => data && data.products)
  .catch(err => console.error(err))
)

export {
  products
}