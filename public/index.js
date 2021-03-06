const axios = require('axios');
const BASE_URL = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1"

const getProducts = async (url = BASE_URL) => {
    try {
      const response = await axios.get(url);
  
      const products = response.data;
  
      console.log(`GET: Here's the list of todos`, products);
  
      return products;
    } catch (errors) {
      console.error(errors);
    }
  };


const getItem = items => {
    items.products.map(value => create(value))
}

const createElement = item => {
    const img = document.createElement("img")
    const name = document.createElement("h3")
    const description = document.createElement("p")
    const oldPrice = document.createElement ("p")
    const price = document.createElement("p")
    const installments = document.createElement("p")
    const button = document.createElement("button")

    img.src = item.image
    img.style.width = "150px"
    img.style.height= "150px"

    name.textContent = item.name
    name.className = "product-name"

    description.textContent = item.description
    description.style.marginBottom = "10px"

    oldPrice.textContent = `De: ${formatCurrency(item.oldPrice)}`

    price.textContent = `Por: ${formatCurrency(item.price)}`
    price.className = "price"

    installments.textContent = `ou ${item.installments.count}x de ${formatCurrency(item.installments.value)}`

    button.textContent = "Comprar"
    return [img, name, description, oldPrice, price, installments, button]
}

const create = item => {
  const arr = createElement(item)
  const main = document.querySelector(".products")
  const div = document.createElement("div")
  div.className = "product"
  for (var i = 0; i < arr.length; i++) {
    div.appendChild(arr[i])
    main.appendChild(div)
  }
}

// const getUrl = async(url) => {
//   const get_url = await getProducts(url);
//   console.log(get_url.nextPage)
//   return get_url.nextPage
// }

n = 2
loadMoreProducts = async () => {
  getItem(await getProducts(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${n}`));
  return n++;
}

const formatCurrency = value => {
  return new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(value)
}

const main = async () => {
    getItem(await getProducts());
    
}

main()

