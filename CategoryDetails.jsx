// src/components/CategoryDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import './CategoryDetails.css';

const CategoryDetails = ({ categories }) => {
  const { name } = useParams();
  const category = categories.find((cat) => cat.name === name);

  if (!category) {
    return <div>Category not found.</div>;
  }

  return (
    <div className="container my-3 category-details">
      <div className="wallet-info">
        <span>Wallet Address for <b>{category.name} Category:</b></span>
        <p>{category.walletAddress}</p>
      </div>

      <div className='time'>
        <span>Token Next Unlock Time:</span>
        <span>Next Token to be Released: 0</span>
      </div>

      <div className="info-cards">
        <div className="info-card">
          <span>Total <b>{category.name}</b> Tokens:</span>
          <h4>650,000,000</h4>
        </div>
        <div className="info-card">
          <span>Total Minted Tokens (till Date):</span>
          <h4>0</h4>
        </div>
        <div className="info-card">
          <span>Un-Locked (Pending for Minting):</span>
          <h4>650,000,000</h4>
        </div>
        <div className="info-card">
          <span>Average Release (Month):</span>
          <h4>27,083,333</h4>
        </div>
        <div className="info-card">
          <span>Cliff Month:</span>
          <h4>12</h4>
        </div>
        <div className="info-card">
          <span>Vested Month:</span>
          <h4>24</h4>
        </div>
      </div>

      <div className="additional-info">
        <Dropdown className="info-btn-dropdown">
          <Dropdown.Toggle variant="primary" className="info-btn">
            Transaction History
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">View All Transactions</Dropdown.Item>
            <Dropdown.Item href="#">Export History</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="info-btn-dropdown">
          <Dropdown.Toggle variant="primary" className="info-btn">
            Check Wallet Balance
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">View Balance</Dropdown.Item>
            <Dropdown.Item href="#">Export Balance Data</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default CategoryDetails;
