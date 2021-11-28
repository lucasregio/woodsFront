import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Modal from './components/Modal';
import ChatProvider from './pages/chat/ChatProvider';
import Feed from './pages/feed/Index';
import Home from './pages/home/Index';
import Layouts from './pages/layouts/Index';
import Layout from './pages/layouts/Layout';
import ListService from './pages/listservice/Index';
import Login from './pages/login/Index';
import NewService from './pages/newservice/Index';
import ProviderFeed from './pages/providerfeed';
import SingUp from './pages/singup/Index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = {'/chatprovider'}>
          <ChatProvider/>
        </Route>
        <Route path = {'/listservice'}>
          <ListService/>
        </Route>
        <Route path = {'/newservice'}>
          <NewService/>
        </Route>
        <Route path = {'/providerfeed'}>
          <ProviderFeed/>
        </Route>
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
        <Route path = {'/chatclient'}>
          <Layout/>
        </Route>
        <Route path = {'/' || '/home'}>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
