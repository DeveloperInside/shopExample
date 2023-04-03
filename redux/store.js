import { configureStore } from '@reduxjs/toolkit'
import reactotron from 'ReactotronConfig'

import productsReducer from './slices/products/slice'
import themeReducer from './slices/theme/slice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    theme: themeReducer
  },
  enhancers: [reactotron.createEnhancer()],
})

export default store