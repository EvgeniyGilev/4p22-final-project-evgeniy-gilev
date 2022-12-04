import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {},
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
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
