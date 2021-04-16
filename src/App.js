import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import HomeView from './views/HomeView/HomeView';
import ContactsView from './views/ContactsView/ContactsView';
import LoginView from './views/LoginView/LoginView';
import RegisterView from './views/RegisterView/RegisterView';
import Container from './components/Container/Container';
import './index.css';

class App extends Component {
  render() {
    return (
      <Container>
        <AppBar />
        <div>
          <p>mor44@i.ua</p>
          <p>mor44</p>
          <p>11111111</p>
        </div>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
        </Switch>
      </Container>
    );
  }
}

export default App;
