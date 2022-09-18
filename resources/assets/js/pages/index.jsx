import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../../../store';

import Menu from './_menu';

import HomePage from '../pages/home'
import ComposerPage from '../pages/app'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Menu />
        <div className="main">
          <Router>
            <Switch>
              <Route path="/app">
                <ComposerPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
};