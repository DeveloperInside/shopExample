import { combineReducers, configureStore } from '@reduxjs/toolkit'
import reactotron from 'ReactotronConfig'
import { persistStore, persistReducer } from 'redux-persist'

import productsReducer from './slices/products/slice'
import themeReducer from './slices/theme/slice'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const reducers = combineReducers({
  products: productsReducer,
  theme: themeReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(),
  enhancers: [reactotron.createEnhancer()],
})

export const persistor = persistStore(store)
