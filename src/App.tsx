/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './scss/App.scss';
import LoginPage from './pages/login';

function App() {
  return (
    <switch>
      <Route path="/login" component={LoginPage} />
      <Redirect to="/login" />
    </switch>
  );
}

export default App;
