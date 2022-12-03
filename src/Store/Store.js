import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slices/CounterSlice';
import mainReducer from './Slices/CartSlice';
import basketReducer from './Slices/BasketSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: mainReducer,
    basket: basketReducer,
  },
});

window.store = store;
