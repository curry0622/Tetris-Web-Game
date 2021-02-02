import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './scss/App.scss';
import GamePage from './pages/game';

function App() {
  return (
    <Switch>
      <Route path="/game" component={GamePage} />
      <Redirect to="/game" />
    </Switch>
  );
}

export default App;
