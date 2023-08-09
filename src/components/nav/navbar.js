import React from 'react';
import { FaAngleLeft, FaCog, FaMicrophone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HeaderWithBackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back
  };

  return (
    <nav className="bg-pink-900">
      <div className="container mx-auto flex items-center justify-between py-4">
        <button type="button" className="text-body-primary" onClick={handleBack}>
          <FaAngleLeft className="text-body-primary" size={26} color="white" />
        </button>
        <h3 className="mb-0 text-white font-semibold">Finance</h3>
        <div className="flex">
          <FaMicrophone className="text-white" size={22} />
          <FaCog className="text-white ml-8" size={22} />
        </div>
      </div>
    </nav>
  );
};

export default HeaderWithBackButton;
