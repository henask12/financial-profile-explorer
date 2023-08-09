import React from 'react';
import { FaAngleLeft, FaMicrophone, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigate back
  };

  return (
    <nav className="bg-dark-pink">
      <div className="container mx-auto flex items-center justify-between py-4">
        <button type="button" className="text-body-primary" onClick={handleBackClick}>
          <FaAngleLeft className="text-body-primary" size={26} color="white" />
        </button>
        <h3 className="mb-0 text-white">finance</h3>
        <div className="flex">
          <FaMicrophone className="text-white" size={22} />
          <FaCog className="text-white ml-8" size={22} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
