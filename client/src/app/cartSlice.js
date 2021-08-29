import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: [],
        cartOpen: false
    },
    reducers: {
        addToCart: {
            reducer(state, action) {
                // Redux Toolkit allows us to write "mutating" logic in reducers. It
                // doesn't actually mutate the state because it uses the immer library,
                // which detects changes to a "draft state" and produces a brand new
                // immutable state based off those changes
                state.cartOpen = true;
                state.value = [...state.value, action.payload];
            }, prepare(product) { return { payload: product } }
        },
        addMultipleToCart: {
            reducer(state, action) {
                state.value = [...state.value, ...action.payload];
            }, prepare(products) { return { payload: products } }
        },
        updateCartQuantity: {
            reducer(state, action) {
                state.cartOpen = true;
                state.value = state.value.map(product => {
                    if (action.payload._id === product._id) {
                        product.purchaseQuantity = action.payload.purchaseQuantity
                    }
                    return product
                })

            }, prepare(_id, purchaseQuantity) { return { payload: { _id, purchaseQuantity } } }
        },
        removeFromCart: {
            reducer(state, action) {
                state.value = state.value.filter(product => {
                    return product._id !== action.payload;
                });
                state.cartOpen = state.value.length > 0;
            }, prepare(_id) { return { payload: _id } }
        },
        clearCart: (state) => {
            state.value = [];
            state.cartOpen = false;
        },
        toggleCart: (state) => {
            state.cartOpen = !state.cartOpen;
        },
    }
});

export const { addToCart, addMultipleToCart, updateCartQuantity, removeFromCart, clearCart, toggleCart } = cartSlice.actions;
export const selectIsCartOpen = state => state.cart.cartOpen;
export const selectCartItems = state => state.cart.value;

export default cartSlice.reducer;