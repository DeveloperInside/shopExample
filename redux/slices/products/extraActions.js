import { createAsyncThunk } from '@reduxjs/toolkit'
import { productsAPI } from 'redux/api/productsAPI'
import { nonEmptyParams } from 'utils/functions'
import { errorCallback } from 'utils/redux/apiErrorHandlers'
import handleAPICall from 'utils/redux/handleAPICall'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (params, { rejectWithValue }) => {
    const sendParams = nonEmptyParams(params)
    const products = await handleAPICall({
      apiCall: () => productsAPI.fetch(sendParams),
      errorCallback,
      rejectWithValue,
    })

    return products
  }
)
