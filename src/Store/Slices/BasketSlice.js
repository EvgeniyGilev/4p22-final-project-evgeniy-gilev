import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {},
  basketProducts: [],
  reducers: {
    addToBasket(state, { payload }) {
      if (state[payload]) {
        state[payload] += 1;
      } else {
        state[payload] = 1;
      }
    },
    removeFromBasket(state, { payload }) {
      if (state[payload]) state[payload] -= 1;

      if (state[payload] === 0) delete state[payload];
    },
    clearBasket() {
      return {};
    },
  },
});

export const { addToBasket, removeFromBasket, clearBasket } =
  basketSlice.actions;

export default basketSlice.reducer;
