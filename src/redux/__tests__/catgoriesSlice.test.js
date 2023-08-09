import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { RESET_VALUE, fetchCategories } from '../catagory/catagoriesSlice'; // Make sure this path is correct

// Create a mock store with middleware
const mockStore = configureMockStore([thunk]);

// Mock axios for testing
jest.mock('axios');

describe('categoriesSlice reducer', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      loading: false,
      performingAction: false,
      error: false,
      success: false,
      message: '',
      companies: [{ companyName: 'Bank of America Corporation' },
        { companyName: 'Microsoft Corporation' }], // Initialize with an empty array for testing
    });
  });

  it('should handle fetchCategories fulfilled', async () => {
    const mockData = [{ companyName: 'Bank of America Corporation' },
      { companyName: 'Microsoft Corporation' }];

    axios.get.mockResolvedValue({ data: mockData }); // Adjust the mock data structure

    await store.dispatch(fetchCategories());

    const actions = store.getActions();
    expect(actions[0].type).toEqual(fetchCategories.pending.type);
    expect(actions[1].type).toEqual(fetchCategories.fulfilled.type);
    expect(actions[1].payload).toEqual(mockData);
    expect(store.getState().loading).toBe(false);
    expect(store.getState().performingAction).toBe(false);
    expect(store.getState().companies).toEqual(mockData); // Match the data structure
  });
  it('should handle RESET_VALUE', () => {
    store.dispatch(RESET_VALUE());

    const actions = store.getActions();
    expect(actions[0].type).toEqual(RESET_VALUE.type);
    expect(store.getState().error).toBe(false);
    expect(store.getState().success).toBe(false);
    expect(store.getState().performingAction).toBe(false);
    expect(store.getState().companies).toEqual([{ companyName: 'Bank of America Corporation' },
      { companyName: 'Microsoft Corporation' }]); // Reset to empty array
  });
});
