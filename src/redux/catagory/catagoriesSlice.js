import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiService from './apiService'; // Import your API service

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const categories = await apiService.fetchCategories();
  return categories;
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    data: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
