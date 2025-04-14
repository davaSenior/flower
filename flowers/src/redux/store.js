import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

const myStore = configureStore({
    reducer: {
        carts: cartReducer
    }
})

export default myStore