import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from './extraActions'
import {
  REDUX_ERROR,
  REDUX_IDLE,
  REDUX_PENDING,
  REDUX_SUCCESS,
} from 'constants/constants'

const initialState = {
  status: REDUX_IDLE,
  products: [],
  favorites: [],
  cart: [],
  pickedProduct: {},
  currentPage: 1,
  fetchLimit: 12,
  queryParams: {
    page: 1,
    limit: 12,
    name: '',
    brand: '',
    sortBy: 'name',
    order: 'asc'
  },
  error: {},
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchMore: state => {
      state.queryParams.page += 1
    },
    addToFavorites: (state, action) => {
      state.favorites = [...state.favorites, action.payload]
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        product => product.id !== action.payload.id
      )
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, {...action.payload, count: 1}]
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        product => product.id !== action.payload.id
      )
    },
    pickProduct: (state, action) => {
      state.pickedProduct = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = [...state.products, ...action.payload]
        state.status = REDUX_SUCCESS
      })
      .addCase(fetchProducts.pending, state => {
        state.status = REDUX_PENDING
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = REDUX_ERROR
        state.error = action.error
      })
  },
})

export const { fetchMore, addToFavorites, removeFromFavorites, addToCart, removeFromCart, pickProduct } =
  productsSlice.actions

export default productsSlice.reducer
