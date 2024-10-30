import React, { useState } from 'react';
import './TokenTable.css';
import { useNavigate } from 'react-router-dom';
import tokenData from '../data/data'; // Ensure this data contains relevant fields for category details
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryDetails from './CategoryDetails'; // Import the CategoryDetails component

const TokenTable = ({categories}) => {
    const navigate = useNavigate(); // Correctly initialize navigate here
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null); // State to track the selected category
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = tokenData.slice(firstIndex, lastIndex);
  const npages = Math.ceil(tokenData.length / recordsPerPage);
  const pageNumbers = Array.from({ length: npages }, (_, i) => i + 1);

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.name}`); // Navigate to category details page
  };

  const prePage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < npages) setCurrentPage(currentPage + 1);
  };

  const changePage = (page) => setCurrentPage(page);

  // Handle back to table
  const handleBackToTable = () => {
    setSelectedCategory(null); // Reset selected category to return to the table view
  };

  // If a category is selected, show CategoryDetails
  if (selectedCategory) {
    return <CategoryDetails category={selectedCategory} onBack={handleBackToTable} />;
  }

  return (
    <div className="container my-4">
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-light">
            <tr>
              <th>Category Id</th>
              <th>Category Name</th>
              <th>Locked Period</th>
              <th>Vesting Period</th>
              <th>Total Tokens</th>
              <th>Genesis Amount</th>
              <th>Tokens to be Released (as per vesting period)</th>
              <th>Pending for Minting</th>
              <th>Total Minted Tokens</th>
              <th>Category Address</th>
            </tr>
          </thead>
          <tbody>
            {records.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{firstIndex + rowIndex + 1}</td> {/* Category Id */}
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>
                    {cellIndex === 0 ? (
                      <button
                        onClick={() => handleCategoryClick(row)} // Pass the entire row (category) to the click handler
                        style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
                      >
                        {cell}
                      </button>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav className="pagination-container">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a href="#" className="page-link" onClick={(e) => { e.preventDefault(); prePage(); }}>
              Prev
            </a>
          </li>
          {pageNumbers.map((num) => (
            <li className={`page-item ${currentPage === num ? 'active' : ''}`} key={num}>
              <a href="#" className="page-link" onClick={(e) => { e.preventDefault(); changePage(num); }}>
                {num}
              </a>
            </li>
          ))}
          <li className={`page-item ${currentPage === npages ? 'disabled' : ''}`}>
            <a href="#" className="page-link" onClick={(e) => { e.preventDefault(); nextPage(); }}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TokenTable;
