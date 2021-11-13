import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Modal from './components/Modal';
import Chat from './pages/chat/Index';
import Feed from './pages/feed/Index';
import Home from './pages/home/Index';
import Layouts from './pages/layouts/Index';
import Login from './pages/login/Index';
import SingUp from './pages/singup/Index';

function App() {
  return (
    <Router>
      <Switch>
          <Route path = {'/modal'}>
            <Modal/>
          </Route>
          <Route path = {'/singUp'}>
              <Header/>
              <SingUp/>
          </Route>
          <Route path = {'/marketplace'}>
            <Header/>
            <Feed/>
          </Route>
          <Route path = {'/login'}>
            <Login/>
          </Route>
          <Route path = {'/perfil'}>
            <Layouts/>
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
