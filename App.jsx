import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import TokenInfo from './components/TokenInfo';
import TokenTable from './components/TokenTable';
import CategoryList from './components/CategoryList';
import CategoryDetails from './components/CategoryDetails';
import './App.css';

const App = () => {
  const categories = [
    { name: 'Team', walletAddress: '0x0618EC2A09E651B1e9B92B351B74b9Dd16d90705' },
    { name: 'Advisors', walletAddress: '0x4695093aC41EBdad58d69EF003E311962580E48F' },
    { name: 'Partners', walletAddress: '0x2BA2F19F0951246f3c5dF4bEa4aF7EE9Af20F618' },
    { name: 'Private Sale' , walletAddress : '0x44a575a6444eCe02f791732699D82d71537669A3'},
        {name: 'Seed Sale' , walletAddress : '0x44a575a6444eCe02f791732699D82d71537669A3'},

            {name: 'Public Launch' , walletAddress : '0x44a575a6444eCe02f791732699D82d71537669A3'},

                {name: 'Exchanges (Liquidity)' , walletAddress : '0x44a575a6444eCe02f791732699D82d71537669A3'},

                    {name: 'Airdrop Rewards' , walletAddress : '0x44a575a6444eCe02f791732699D82d71537669A3'},

                        {name: 'Incentive Rewards' , walletAddress : '0x44a575a6444eCe02f791732699D82d71537669A3'},
                        {name: 'Treasury' , walletAddress : '0x44a575a6444eCe02f791732699D82d71537669A3'} ,
                        {name: 'Reserve Fund' , walletAddress : '0x44a575a6444eCe02f791732699D82d71537669A3'}

    

    // Add more categories as needed
  ];

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          {/* Home page route */}
          <Route
            path="/"
            element={
              <div>
                <TokenInfo />
                <TokenTable categories={categories}/>
              </div>
            }
          />

          {/* Sidebar with CategoryList */}
          <Route
            path="*"
            element={
              <div className="app-container">
                <div className="sidebar">
                  <CategoryList categories={categories} />
                </div>
                <div className="content">
                  <Routes>
                    <Route
                      path="/category/:name"
                      element={<CategoryDetails categories={categories} />}
                    />
                  </Routes>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
