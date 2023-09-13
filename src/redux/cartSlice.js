import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [], // Let Suppose Database
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
  isLoading: true,
  open: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openModel: (state) => {
      state.open = !state.open
    },
    addTocart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1
        toast.success(`item increased by 1`);
      }
      else {
        const item = { ...action.payload, quantity: 1, amount: 0, total: 0 }
        state.cartItems.push(item)
        toast.success(`${action.payload.title} added to cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));

    },
    clearCart: (state) => {
      state.cartItems = []
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeItem: (state, action) => {
      const remove = state.cartItems.filter(item => item.id !== action.payload)
      state.cartItems = remove;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    increaseItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1
        toast.success(`quantity increasing`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    deCreaseItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity -= 1
        toast.success(`quantity decreasing`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

  }
});

export const { openModel, addTocart, clearCart, removeItem, increaseItem, deCreaseItem, subtotalAmount } = cartSlice.actions
export default cartSlice.reducer;