import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  isLoading: false,
  cartProducts: {},
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
    addProductToCart: (state, { payload }) => {
      // передаем в payload id продукта, по которому ищем товар в общем списке, и его добавляем в корзину
      const addedProduct = state.products.find(
        (product) => product.id === payload
      );
      state.cartProducts.push(addedProduct);
    },
    removeProductFromCart: (state, { payload }) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== payload
      );
    },
  },
});

export const { setProducts, setIsLoading } = cartSlice.actions;

export default cartSlice.reducer;
