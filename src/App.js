import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import './App.css';
import Header from './components/nav/navbar';
import CompaniesList from './components/list/FinancialList';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-pink-700">
        <Header />
        <CompaniesList />
      </div>
    </BrowserRouter>
  );
}

export default App;
