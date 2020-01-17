const API_ENDPOINT = 'https://frontend-intern-challenge-api.iurykrieger.now.sh'

const products = page => {
  console.log("productssss fetch")
  return fetch(`${API_ENDPOINT}/products`, {
    qs: { page }
  })
  .then(response => {
    console.log(response)
    return response.json()
  })
  .then(data => {
    console.log(data)
    return data && data.products
  })
  .catch(err => console.error(err))
}

export {
  products
}