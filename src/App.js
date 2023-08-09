import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import './App.css';
import CompaniesList from './components/list/FinancialList';
import HeaderWithBackButton from './components/nav/navbar';
import CompanyDetails from './components/details/FinancialDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-pink-700">
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
