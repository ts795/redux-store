import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import productsReducer from './productsSlice'
import categoriesReducer from './categoriesSlice'

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    categories: categoriesReducer
  }
})