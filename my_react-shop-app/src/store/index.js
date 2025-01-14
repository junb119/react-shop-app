import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/user.slice";

export const store = configureStore({
  reducer: {
   userSlice
  },
});
export default store