import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Auth } from './pages/auth';
import { ExpenseTracker } from './pages/expense-tracker';
import { LandingPage } from './pages/landingpage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path ="/sign-in" element={<Auth/>}/>
          <Route path="/expense-tracker" element={<ExpenseTracker/>}/>
          <Route path='/' element={<LandingPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
