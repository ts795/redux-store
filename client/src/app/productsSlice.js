import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        value: []
    },
    reducers: {
        updateProducts: {
            reducer(state, action) {
                // Redux Toolkit allows us to write "mutating" logic in reducers. It
                // doesn't actually mutate the state because it uses the immer library,
                // which detects changes to a "draft state" and produces a brand new
                // immutable state based off those changes
                state.value = [...action.payload];
            },
            prepare(products) {
                let productList = products ? products : [];
                return {
                    payload: productList
                }
            }
        }
    }
})

export const { updateProducts } = productsSlice.actions;
export const selectProducts = state => state.products.value;

export default productsSlice.reducer