import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  isLoading: false,
  basketTotal: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    addBasketTotal: (state, { payload }) => {
      state.basketTotal = Math.round((state.basketTotal + payload) * 100) / 100;
    },
    removeBasketTotal: (state, { payload }) => {
      state.basketTotal = Math.round((state.basketTotal - payload) * 100) / 100;
    },
  },
});

export const { setProducts, setIsLoading, addBasketTotal, removeBasketTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
