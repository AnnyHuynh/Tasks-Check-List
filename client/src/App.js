import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Task from './components/pages/Task';
import './App.css';

function onAuthRequired({history}){
  history.push('/login');
}


class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer='https://dev-568198.okta.com/oauth2/default'
                  client_id='0oad2f5w2NKepAQAK356'
                  redirect_uri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired}>
      <div className="App">

        <Navbar />

        <div className="container">
        <Route path="/" exact={true} component={Home} />
        <SecureRoute path='/task' exact={true} Component={Task} />
        <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-568198.okta.com" />
                )}
        />
        <Route path='/implicit/callback' component={ImplicitCallback} />
        </div>

      </div>
       </Security>
      </Router>
    );
  }
}

export default App;
