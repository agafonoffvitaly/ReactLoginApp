import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Product from '../Product/Product';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';

function App() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <Router>
        <Routes>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/preferences" component={Preferences}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
