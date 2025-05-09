import api from './axios'


const getProducts = (offset = 0, limit = 20, title = '') => {
    return api.get('/products', {
        params: { offset, limit, title }
    })
}

const getProductById = (id: number) => {
   return api.get(`/products/${id}`)
}

const getCategories = () => { 
    return api.get('/categories') 
}

export { getCategories, getProductById, getProducts }