import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductProps } from '../types/types';

const initialState: ProductProps[] = [];

const productsSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    receivedProducts(state, action: PayloadAction<ProductProps[]>) {
      const products = action.payload;
      products.forEach(product => {
        state[product.id - 1] = product;
      })
    }
  }
})

export const { receivedProducts } = productsSlice.actions;

export default productsSlice.reducer;