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
    }
  }
});

export const { openModel } = cartSlice.actions
export default cartSlice.reducer;