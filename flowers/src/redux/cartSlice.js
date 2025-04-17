import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItem: [] 
    },
    reducers: {
        addCart: ( el, act ) => {
            const findProduct = el.cartItem.find( (el) => el.id == act.payload.id )
            if( !findProduct ){
                el.cartItem.push( act.payload )
            }
        }
    }
})

export const { addCart } = cartSlice.actions
export default cartSlice.reducer