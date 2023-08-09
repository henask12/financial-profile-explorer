import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompanyCard from '../card/companiesCard';

// Mocking react-router-dom's useNavigate
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('CompanyCard Component', () => {
  const mockCompany = {
    image: 'https://financialmodelingprep.com/image-stock/PYPL.png',
    companyName: 'PayPal Holdings, Inc.',
    symbol: 'PYPL',
    price: 62.02,
  };

  it('renders the CompanyCard component correctly', () => {
    const { getByText, getByAltText } = render(<CompanyCard company={mockCompany} index={0} />);
    
    expect(getByText(mockCompany.symbol)).toBeInTheDocument();
    expect(getByText(mockCompany.price)).toBeInTheDocument();
    expect(getByAltText(mockCompany.companyName)).toBeInTheDocument();
  });

  it('calls navigate when the button is clicked', () => {
    const mockNavigate = jest.fn();
    require('react-router-dom').useNavigate.mockReturnValue(mockNavigate);
    
    const { getByRole } = render(<CompanyCard company={mockCompany} index={0} />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith(`/company/${mockCompany.symbol}`, {
      state: { company: mockCompany },
    });
  });
});

