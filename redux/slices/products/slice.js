import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    status: 'idle',
    message: '',
    products: [],
    errors: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {}
})

export default productsSlice.reducer 