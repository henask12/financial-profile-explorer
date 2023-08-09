import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CompanyCard from '../card/companiesCard';
import { fetchCategories } from '../../redux/catagory/catagoriesSlice';
import CompanyDetails from '../details/FinancialDetails';

const CompaniesList = () => {
  const { loading, error, companies } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCardClick = (company) => {
    setSelectedCompany(company);
  };

  useEffect(() => {
    dispatch(fetchCategories());

    return () => {
      setSelectedCompany(null);
    };
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-pink-700">
        <div className="text-center">
          <div className="animate-spin mb-2">
            <svg className="w-8 h-8 text-gray-800" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4.009zm10-5.29A7.962 7.962 0 0120 12h4c0-4.418-3.582-8-8-8v4.01z"
              />
            </svg>
          </div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Something went wrong...</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {selectedCompany ? (
        <CompanyDetails company={selectedCompany} />
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {companies.map((company, index) => (
            <CompanyCard
              company={company}
              index={index}
              key={company.symbol}
              onClick={() => handleCardClick(company)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CompaniesList;
