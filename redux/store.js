import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products/slice";

export const store = configureStore({
    reducer: {
        products: productsReducer
    }
})