import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProps, ProductProps } from '../types/types';

const initialState: CartProps = {
  cartItems: [],
  amount: 0,
  total: 0
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart(state, action: PayloadAction<ProductProps>) {
      const cartLength = state.cartItems.length;
      let found = false;
      for (let i = 0; i < cartLength; i++) {
        if (action.payload.title === state.cartItems[i].title) {
          state.cartItems[i].quantity += 1;
          found = true;
        }
      }
      if (!found) {
        state.cartItems.push({
          title: action.payload.title,
          price: +action.payload.price,
          quantity: 1
        })
      }
    },
    calculateTotals(state) {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach(item => {
        amount += item.quantity;
        total += item.quantity * item.price;
      })
      state.amount = amount;
      state.total = total;
    }
  }
})

export const { addToCart, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;