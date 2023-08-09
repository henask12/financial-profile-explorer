import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import './App.css';
import CompaniesList from './components/list/FinancialList.js';
import HeaderWithBackButton from './components/nav/navbar.js';
import CompanyDetails from './components/details/FinancialDetails.js';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-pink-700 min-h-full flex flex-col">
        <HeaderWithBackButton />
        <Routes>
          <Route path="/" element={<CompaniesList />} />
          <Route path="/company/:symbol" element={<CompanyDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
