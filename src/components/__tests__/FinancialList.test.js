import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider, useDispatch, useSelector } from 'react-redux'; // Make sure to import your Redux store provider
import { MemoryRouter } from 'react-router-dom';
import CompaniesList from '../list/FinancialList';
import store from '../../redux/store';

// Mock useSelector and useDispatch for testing
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('CompaniesList', () => {
  const mockState = {
    categories: {
      loading: false,
      error: null,
      companies: [
        {
          symbol: 'PYPL',
          price: 62.02,
          beta: 1.328368,
          volAvg: 18748916,
          mktCap: 69196331223,
          lastDiv: 0,
          range: '58.95-103.03',
          changes: -1.17,
          companyName: 'PayPal Holdings, Inc.',
          currency: 'USD',
          cik: '0001633917',
          isin: 'US70450Y1038',
          cusip: '70450Y103',
          exchange: 'NASDAQ Global Select',
          exchangeShortName: 'NASDAQ',
          industry: 'Credit Services',
          website: 'https://www.paypal.com',
          description: "PayPal Holdings, Inc. operates a technology platform that enables digital payments on behalf of merchants and consumers worldwide. It provides payment solutions under the PayPal, PayPal Credit, Braintree, Venmo, Xoom, Zettle, Hyperwallet, Honey, and Paidy names. The company's payments platform allows consumers to send and receive payments in approximately 200 markets and in approximately 100 currencies, withdraw funds to their bank accounts in 56 currencies, and hold balances in their PayPal accounts in 25 currencies. PayPal Holdings, Inc. was founded in 1998 and is headquartered in San Jose, California.",
          ceo: 'Mr. Daniel H. Schulman',
          sector: 'Financial Services',
          country: 'US',
          fullTimeEmployees: '29900',
          phone: '408 967 1000',
          address: '2211 North First Street',
          city: 'San Jose',
          state: 'CA',
          zip: '95131',
          dcfDiff: 3.17826,
          dcf: 85.0083,
          image: 'https://financialmodelingprep.com/image-stock/PYPL.png',
          ipoDate: '2015-07-06',
          defaultImage: false,
          isEtf: false,
          isActivelyTrading: true,
          isAdr: false,
          isFund: false,
        },
        {
          symbol: 'BAC',
          price: 30.86,
          beta: 1.369241,
          volAvg: 45773511,
          mktCap: 245446863575,
          lastDiv: 0.96,
          range: '26.32-38.6',
          changes: -0.41,
          companyName: 'Bank of America Corporation',
          currency: 'USD',
          cik: '0000070858',
          isin: 'US0605051046',
          cusip: '060505104',
          exchange: 'New York Stock Exchange',
          exchangeShortName: 'NYSE',
          industry: 'Banks—Diversified',
          website: 'https://www.bankofamerica.com',
          description: "Bank of America Corporation, through its subsidiaries, provides banking and financial products and services for individual consumers, small and middle-market businesses, institutional investors, large corporations, and governments worldwide. Its Consumer Banking segment offers traditional and money market savings accounts, certificates of deposit and IRAs, noninterest-and interest-bearing checking accounts, and investment accounts and products; and credit and debit cards, residential mortgages, and home equity loans, as well as direct and indirect loans, such as automotive, recreational vehicle, and consumer personal loans. The company's Global Wealth & Investment Management segment offers investment management, brokerage, banking, and trust and retirement products and services; and wealth management solutions, as well as customized solutions, including specialty asset management services. Its Global Banking segment provides lending products and services, including commercial loans, leases, commitment facilities, trade finance, and commercial real estate and asset-based lending; treasury solutions, such as treasury management, foreign exchange, and short-term investing options and merchant services; working capital management solutions; and debt and equity underwriting and distribution, and merger-related and other advisory services. The company's Global Markets segment offers market-making, financing, securities clearing, settlement, and custody services, as well as risk management products using interest rate, equity, credit, currency and commodity derivatives, foreign exchange, fixed-income, and mortgage-related products. As of December 31, 2021, it served approximately 67 million consumer and small business clients with approximately 4,200 retail financial centers; approximately 16,000 ATMs; and digital banking platforms with approximately 41 million active users. The company was founded in 1784 and is based in Charlotte, North Carolina.",
          ceo: 'Mr. Brian Thomas Moynihan',
          sector: 'Financial Services',
          country: 'US',
          fullTimeEmployees: '216000',
          phone: '704 386 5681',
          address: 'Bank of America Corporate Center',
          city: 'Charlotte',
          state: 'NC',
          zip: '28255',
          dcfDiff: 42.2566,
          dcf: 77.7066,
          image: 'https://financialmodelingprep.com/image-stock/BAC.png',
          ipoDate: '1973-02-21',
          defaultImage: false,
          isEtf: false,
          isActivelyTrading: true,
          isAdr: false,
          isFund: false,
        },
      ],
    },
  };
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector(mockState));
    useDispatch.mockReturnValue(mockDispatch);
  });

  it('renders loading state correctly', () => {
    useSelector.mockImplementation((selector) => selector({
      ...mockState,
      categories: {
        ...mockState.categories,
        loading: true,
      },
    }));

    render(
      <Provider store={store}>
        <CompaniesList />
      </Provider>,
    );

    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  });

  it('renders error state correctly', () => {
    const errorMessage = 'An error occurred';
    useSelector.mockImplementation((selector) => selector({
      ...mockState,
      categories: {
        ...mockState.categories,
        error: errorMessage,
      },
    }));

    render(
      <Provider store={store}>
        <CompaniesList />
      </Provider>,
    );

    const errorText = screen.getByText('Something went wrong...');
    expect(errorText).toBeInTheDocument();
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('renders list of companies and allows searching', () => {
    render(
      <Provider store={store}>
        {/* Wrap CompaniesList in MemoryRouter */}
        <MemoryRouter>
          <CompaniesList />
        </MemoryRouter>
      </Provider>,
    );

    // Test the list of companies and search functionality here
    const searchInput = screen.getByPlaceholderText('Search companies...');
    expect(searchInput).toBeInTheDocument();

    // Simulate user input in the search input
    fireEvent.change(searchInput, { target: { value: 'example' } });

    // Test the effect of searching on the displayed companies
    const companyCards = screen.getAllByTestId('company-card');
    expect(companyCards.length).toBeGreaterThan(0);

    // Click on a company card
    fireEvent.click(companyCards[0]);

    // Test the rendering of CompanyDetails component
    const companyDetails = screen.getByTestId('company-details');
    expect(companyDetails).toBeInTheDocument();
  });
});
