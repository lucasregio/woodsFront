import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login/Index';
import Perfil from './pages/perfil/Index';

function App() {
  return (
    <Router>
      <Switch>
          <Route path = {'/login'}>
            <Login/>
          </Route>
          
          <Route path = {'/perfil'}>
            <Perfil/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
