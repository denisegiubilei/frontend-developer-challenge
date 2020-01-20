const API_ENDPOINT = 'https://frontend-intern-challenge-api.iurykrieger.now.sh'

const products = page => (
  fetch(`${API_ENDPOINT}/products`, {
    qs: { page }
  })
  .then(response => response.json())
  .then(data => data && data.products)
  .catch(err => console.error(err))
)

const addUser = user => (
  new Promise(resolve => {
    setTimeout(() => { 
      resolve(console.log(user))
    }, 2000)
  }) 
)

export {
 products,
 addUser
}