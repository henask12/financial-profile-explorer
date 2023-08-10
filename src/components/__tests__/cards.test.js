import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompanyCard from '../card/companiesCard.js';

// Mocking react-router-dom's useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // Keep the actual implementation
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
    expect(getByText(mockCompany.price.toString())).toBeInTheDocument(); // Convert price to string
    expect(getByAltText(mockCompany.companyName)).toBeInTheDocument();
  });

  it('calls navigate when the button is clicked', () => {
    const mockNavigate = jest.fn();
    jest.requireMock('react-router-dom').useNavigate.mockReturnValue(mockNavigate);

    const { getByRole } = render(<CompanyCard company={mockCompany} index={0} />);
    const button = getByRole('button');

    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith(`/company/${mockCompany.symbol}`, {
      state: { company: mockCompany },
    });
  });
});
