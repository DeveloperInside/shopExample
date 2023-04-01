import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from './extraActions'
import { REDUX_ERROR, REDUX_IDLE, REDUX_PENDING, REDUX_SUCCESS } from 'constants/constants'

const initialState = {
  status: REDUX_IDLE,
  products: [],
  error: {},
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload
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

export default productsSlice.reducer
