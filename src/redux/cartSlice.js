import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
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
      }
      else {
        const item = { ...action.payload, quantity: 1 }
        state.cartItems.push(item)
      }

    }
  }
});

export const { openModel, addTocart } = cartSlice.actions
export default cartSlice.reducer;