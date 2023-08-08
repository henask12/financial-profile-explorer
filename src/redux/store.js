import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './catagory/catagoriesSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});

export default store;
