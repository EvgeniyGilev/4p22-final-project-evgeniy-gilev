import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './Slice';

export const store = configureStore({
  reducer: { mainReducer },
});

window.store = store;
