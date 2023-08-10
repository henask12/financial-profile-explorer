import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const CompanyCard = ({ company, index }) => {
  const cardBgColor = index % 4 === 0 || index % 4 === 3 ? 'bg-pink-500' : 'bg-pink-600';
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/company/${company.symbol}`, { state: { company } });
  };
  return (
    <button
      className={`border-0 ${cardBgColor} text-white rounded-sm overflow-hidden shadow-sm`}
      onClick={handleCardClick}
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
};

export default CompanyCard;
