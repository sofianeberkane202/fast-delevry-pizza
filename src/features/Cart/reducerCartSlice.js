import { createSlice } from "@reduxjs/toolkit";

const fakeCart = [
  {
    pizzaId: 1,
    name: "Margherita Margherita",
    quantity: 1,
    unitPrice: 12,
    totalPrice: 12,
  },
  {
    pizzaId: 2,
    name: "Romana",
    quantity: 3,
    unitPrice: 15,
    totalPrice: 45,
  },
  {
    pizzaId: 3,
    name: "Prosciutto e Rucola",
    quantity: 4,
    unitPrice: 16,
    totalPrice: 64,
  },
];

const initialState = {
  cart: fakeCart,
};

const cartReducer = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart(state, action) {
      // payload: pizzaId
      state.cart.push(action.payload);
    },

    deleteCartItem(state, action) {
      // payload: pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },

    increaseQuantity: {
      prepare: (pizzaId, newQuantity) => {
        return { pizzaId, newQuantity };
      },
      reducer: (state, action) => {
        const { pizzaId, newQuantity } = action.payload;
        const item = state.cart.find((item) => item.pizzaId === pizzaId);
        item.quantity += newQuantity;
        item.totalPrice = item.quantity * item.unitPrice;
      },
    },

    decreaseQuantity: {
      prepare: (pizzaId, newQuantity) => {
        return { pizzaId, newQuantity };
      },
      reducer: (state, action) => {
        const { pizzaId, newQuantity } = action.payload;
        const item = state.cart.find((item) => item.pizzaId === pizzaId);
        item.quantity -= newQuantity;
        item.totalPrice = item.quantity * item.unitPrice;
      },
    },
  },
});

export const { addToCart, deleteCartItem, increaseQuantity, decreaseQuantity } = cartReducer.actions;

export default cartReducer.reducer;
