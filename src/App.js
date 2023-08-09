import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CompaniesList from './components/FinancialList';
import Header from './components/navbar';

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
