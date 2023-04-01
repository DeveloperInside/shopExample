import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from './extraActions'
import { REDUX_ERROR, REDUX_IDLE, REDUX_PENDING, REDUX_SUCCESS } from 'constants/constants'

const initialState = {
  status: REDUX_IDLE,
  products: [],
  currentPage: 1,
  fetchLimit: 12,
  error: {},
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchMore: (state) => {
      state.currentPage += 1
    }
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

export const { fetchMore } = productsSlice.actions

export default productsSlice.reducer
