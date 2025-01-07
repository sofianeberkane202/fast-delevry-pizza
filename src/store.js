import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/Cart/reducerCartSlice";
import userReducer from "./features/User/reducerUserSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
