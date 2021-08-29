import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        value: [],
        currentCategory: ''
    },
    reducers: {
        updateCategories: {
            reducer(state, action) {
                // Redux Toolkit allows us to write "mutating" logic in reducers. It
                // doesn't actually mutate the state because it uses the immer library,
                // which detects changes to a "draft state" and produces a brand new
                // immutable state based off those changes
                state.value = [...action.payload];
            },
            prepare(categories) {
                let categoriesList = categories ? categories : [];
                return {
                    payload: categoriesList
                }
            }
        },
        updateCurrentCategory: {
            reducer(state, action) {
                state.currentCategory = action.payload;
            }, prepare(currentCategory) {
                return {
                    payload: currentCategory
                }
            }
        }
    }
});

export const { updateCategories, updateCurrentCategory } = categoriesSlice.actions;

export const selectCurrentCategory = state => state.categories.currentCategory;
export const selectCategories = state => state.categories.value;

export default categoriesSlice.reducer;