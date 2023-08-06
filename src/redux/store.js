import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    // Add other reducers here if needed
  },
});

export default store;
