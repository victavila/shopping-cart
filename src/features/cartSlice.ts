import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItemProps, CartProps, ProductProps } from '../types/types';

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
        if (action.payload.title === state.cartItems[i].title ) {
          if (state.cartItems[i].quantity < 99) {
            state.cartItems[i].quantity += 1;
          }
          found = true;
        }
      }
      if (!found) {
        state.cartItems.push({
          title: action.payload.title,
          image: action.payload.image,
          price: +action.payload.price,
          quantity: 1,
          id: action.payload.id
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
    },
    incrementQuantity(state, action: PayloadAction<CartItemProps>) {
      let selectedItem = state.cartItems.find(item => item.id === action.payload.id);
      
      if (selectedItem) {
        if (selectedItem.quantity < 99) {
          selectedItem.quantity++;
        }
      }
    },
    decrementQuantity(state, action: PayloadAction<CartItemProps>) {
      let selectedItem = state.cartItems.find(item => item.id === action.payload.id);
      
      if (selectedItem) {
        if (selectedItem.quantity > 1) {
          selectedItem.quantity--;
        }
      }
    },
    deleteItem(state, action: PayloadAction<CartItemProps>) {
      state.cartItems.splice(state.cartItems.findIndex(item => item.id === action.payload.id), 1);
    }
  }
})

export const { addToCart, calculateTotals, incrementQuantity, decrementQuantity, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;