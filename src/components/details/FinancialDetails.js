import PropTypes from 'prop-types';
import React from 'react';

const CompanyDetails = ({ company }) => {
  console.log(company);
  return (
    <div className="company-details">
      <h2>{company.companyName}</h2>
      <p>
        Price:
        {company.price}
      </p>
      {/* Render other details as needed */}
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
