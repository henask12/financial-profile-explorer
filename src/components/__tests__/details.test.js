import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompanyDetails from '../details/FinancialDetails';

// Mocking react-router-dom's useLocation
jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
}));

describe('CompanyDetails Component', () => {
  const mockCompany = {
    image: 'https://financialmodelingprep.com/image-stock/PYPL.png',
    companyName: 'PayPal Holdings, Inc.',
    symbol: 'PYPL',
    price: 62.02,
  };

  it('renders the CompanyDetails component correctly', () => {
    require('react-router-dom').useLocation.mockReturnValue({ state: { company: mockCompany } });

    const { getByText, getByAltText } = render(<CompanyDetails />);
    
    expect(getByText('PYPL', { selector: 'h1' })).toBeInTheDocument();
    expect(getByText('62.02', {selector: 'h6'})).toBeInTheDocument();
    expect(getByAltText(mockCompany.companyName)).toBeInTheDocument();
  });

});
