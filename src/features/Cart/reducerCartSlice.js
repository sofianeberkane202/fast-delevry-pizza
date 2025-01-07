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
  // cart: [],
};

const cartReducer = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart(state, action) {
      // payload: cartItem
      state.cart.push(action.payload);
    },

    deleteCartItem(state, action) {
      // payload: pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },

    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity += 1;
      item.totalPrice = item.quantity * item.unitPrice;
    },

    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item.quantity === 1) return;
      item.quantity -= 1;
      item.totalPrice = item.quantity * item.unitPrice;
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export function getCart(state) {
  return state.cart.cart;
}

export function getQuantity(state, pizzaId) {
  return state.cart.cart.find((item) => item.pizzaId === pizzaId);
}

export function getNumberOfPizzasAdded(state) {
  return state.cart.cart.map((item) => item.quantity).reduce((totalQuantity, quantity) => totalQuantity + quantity, 0);
}

export function getBillOfTotalPrice(state) {
  return state.cart.cart.map((item) => item.totalPrice).reduce((total, price) => total + price, 0);
}

export const { addToCart, deleteCartItem, increaseQuantity, decreaseQuantity, clearCart } = cartReducer.actions;

export default cartReducer.reducer;
