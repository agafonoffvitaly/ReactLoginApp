import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import UserManagement from '../UserManagement/UserManagement';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/users">
            <UserManagement />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
