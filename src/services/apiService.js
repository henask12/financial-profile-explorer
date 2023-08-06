import axios from 'axios';

const API_KEY = '11d7e6b8232bd10c3d08da305786902b';
const API_BASE_URL = 'https://financialmodelingprep.com/api/v3';

const apiService = {
  fetchCategories: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/profile/AAPL?apikey=${API_KEY}`);
      const data = response.data;

      return data.map((category) => ({
        id: category.id,
        name: category.category,
        value: category.value,
      }));
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default apiService;
