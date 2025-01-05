import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/Cart/reducerCartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
