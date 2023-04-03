import axios from 'axios'
import { APIPATH } from './apiPaths'

export const productsAPI = {
  fetch: params =>
    axios.get(APIPATH.BASE + APIPATH.PRODUCT.fetch, { params }),
}
