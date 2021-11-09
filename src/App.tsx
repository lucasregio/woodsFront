import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './pages/chat/Index';
import Home from './pages/home/Index';
import Layouts from './pages/layouts/Index';
import Login from './pages/login/Index';

function App() {
  return (
    <Router>
      <Switch>
          <Route path = {'/login'}>
            <Login/>
          </Route>
          <Route path = {'/perfil'}>
            <Layouts/>
            {/* <Perfil/> */}
          </Route>
          <Route path = {'/chat'}>
            <Chat/>
          </Route>
          <Route path = {'/' || '/home'}>
            <Home/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
