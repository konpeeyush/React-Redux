import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },

        removeFromCart: (state, action) => {
            return state.filter((product) => product.id !== action.payload.id);
        }

    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;