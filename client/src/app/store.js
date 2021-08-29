import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import categoriesReducer from './categoriesSlice'
import productsReducer from './productsSlice'

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    categories: categoriesReducer
  }
})