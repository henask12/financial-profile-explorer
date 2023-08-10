import PropTypes from 'prop-types';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const CompanyDetails = () => {
  const location = useLocation();
  const { company } = location.state;

  return (
    <div className="container mx-auto px-8 sm:px-8 lg:px-8">
      <div className="hero flex justify-center items-center p-3">
        <img
          src={company.image}
          alt={company.companyName}
          className="logo w-50"
        />
        <div className="w-100 text-center ml-6 text-xl">
          <h1 className="font-bold text-3xl">{company.symbol}</h1>
          <h6>{company.price}</h6>
        </div>
      </div>
      <h5 className="mt-2 pb-1 text-center font-semibold text-3xl">
        {company.companyName}
  &nbsp;info
      </h5>

      <div className="company__data">
        <div className="container">
          {Object.keys(company)
            .filter(
              (value) => value !== 'image'
          && value !== 'defaultImage'
          && value !== 'isEtf'
          && value !== 'isActivelyTrading'
          && value !== 'isAdr'
          && value !== 'isFund'
          && value !== 'description',
            )
            .map((value, index) => (
              <div
                key={value}
                className={`border-t py-3 flex justify-between items-center ${index % 2 === 0 ? 'bg-pink-700' : 'bg-pink-900'}`}
              >
                <span className="p-3 text-lg font-semibold capitalize">{value}</span>
                <div className="flex items-center">
                  <span className="p-3 text-lg text-semibold">{company[value]}</span>
                  <FaArrowRight
                    className="FaArrowRight"
                    size={22}
                    color="white"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

    </div>
  );
};

CompanyDetails.propTypes = {
  company: PropTypes.shape({
    image: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
export default CompanyDetails;
