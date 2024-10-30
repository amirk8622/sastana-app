import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryList.css';

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      <h3>Sastana</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/category/${category.name}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
