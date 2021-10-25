import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,

    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload
            const existingItems = state.items.find((item) => item.id === newItem.id)
            state.totalQuantity++;
            if (!existingItems) {
                state.items.push({
                    name: newItem.title,
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })

            } else {
                existingItems.quantity++;
                existingItems.totalPrice = existingItems.totalPrice + newItem.price;
            }
        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id)
            state.totalQuantity--;

            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id)
            } else {
                existingItem.totalQuantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
})

export const cartAction = cartSlice.actions;

export default cartSlice