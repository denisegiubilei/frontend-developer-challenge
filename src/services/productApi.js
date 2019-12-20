const ENDPOINT = 'https://frontend-intern-challenge-api.iurykrieger.now.sh'

const getProducts = page => {
  fetch(`${ENDPOINT}/products`, { qs: { page: page } })
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.error(err))
}

export { getProducts }