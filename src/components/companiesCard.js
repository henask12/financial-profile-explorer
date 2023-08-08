import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

const CompanyCard = ({ company, index, onClick }) => {
  const cardBgColor = index % 4 === 0 || index % 4 === 3 ? 'bg-pink-500' : 'bg-pink-600';

  return (
    <button
      className={`border-0 ${cardBgColor} text-white rounded-lg overflow-hidden shadow-lg`}
      onClick={() => onClick(company)}
      type="button"
    >
      <div className="text-end p-2">
        <FaArrowRight className="FaArrowRight" size={22} color="white" />
        <img
          src={company.image}
          alt={company.companyName}
          className="company__logo p-3"
        />
        <h2 className="text-lg font-semibold">
          {company.symbol}
        </h2>
        <p>{company.price}</p>
      </div>
    </button>
  );
};

CompanyCard.propTypes = {
  company: PropTypes.shape({
    image: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired, // Add onClick to PropTypes validation
};

export default CompanyCard;
