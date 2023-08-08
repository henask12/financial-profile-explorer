import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import companiesData from '../../constant/companiesData.json';

const API_KEY = '11d7e6b8232bd10c3d08da305786902b';
const API_BASE_URL = 'https://financialmodelingprep.com/api/v3';

const initialState = {
  loading: false,
  performingAction: false,
  error: false,
  success: false,
  message: '',
  companies: [],
};

export const fetchCategories = createAsyncThunk('catagories/fetchCategories', async () => {
  try {
    const symbolString = companiesData.symbols.join(',');
    const companies = await axios.get(
      `${API_BASE_URL}/profile/${symbolString}?apikey=${API_KEY}`,
    );
    return companies.data;
  } catch (error) {
    return error.companies.data;
  }
});

// Slice

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    RESET_VALUE(state) {
      state.error = false;
      state.success = false;
      state.performingAction = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
      state.performingAction = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.performingAction = false;
      state.companies = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.performingAction = false;
      state.message = action.payload?.errors[0];
      state.companies = [];
    });
  },
});

export const { RESET_VALUE } = categoriesSlice.actions;
export default categoriesSlice.reducer;
