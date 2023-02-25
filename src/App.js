
import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Checkout from "./Checkout";
import LandingPage from './LandingPage';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/checkout" element={<Checkout />} />
        
      </Routes>
    </BrowserRouter>
    
      
      </div>

    
   
  );
}

export default App;
