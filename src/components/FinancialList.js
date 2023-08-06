import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryList } from './redux/actions';

const CategoryList = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategoryList());
  }, [dispatch]);

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Category List</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="mb-2">
            <a href={`/details/${category.id}`} className="text-blue-500 hover:underline">
              {category.name}
            </a>
            <span className="ml-2">{category.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
