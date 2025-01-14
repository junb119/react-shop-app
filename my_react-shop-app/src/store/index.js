import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/user.slice";
import categoriesSlice from "./categories/categories.slice";
import cartSlice from "./cart/cart.slice";
import productsSlice from './products/products.slice'

export const store = configureStore({
  reducer: {
    categoriesSlice,
    userSlice,
    cartSlice,
    productsSlice
  },
});
export default store;
