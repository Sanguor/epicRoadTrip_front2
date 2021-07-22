import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Form from './containers/Form';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/">
        <Form />
      </Route>
    </Switch>
  </Router>
);

export default App;
