import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './catagory/catagoriesSlice.js';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});

export default store;
