import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/products/slice'
import reactotron from 'ReactotronConfig'

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  enhancers: [reactotron.createEnhancer()],
})
