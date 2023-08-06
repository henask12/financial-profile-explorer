import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryDetails = () => {
  const { id } = useParams();

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Category Details</h1>
      {/* Display category details */}
    </div>
  );
};

export default CategoryDetails;
