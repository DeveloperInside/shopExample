import { createAsyncThunk } from '@reduxjs/toolkit'
import { productsAPI } from 'redux/api/productsAPI'
import { errorCallback } from 'utils/redux/apiErrorHandlers'
import handleAPICall from 'utils/redux/handleAPICall'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    const products = await handleAPICall({
      apiCall: () => productsAPI.fetch(),
      errorCallback,
      rejectWithValue,
    })

    return products
  }
)
