import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../../../store';

import Menu from '../base/_menu';

import HomePage from './_home'
import ComposerPage from './_app'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Menu />
        <main className="main">
          <Router>
            <Routes>
              <Route path="/app/:id" element={<ComposerPage />} />
              <Route path="/app" element={<ComposerPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Router>
        </main>
      </Provider>
    );
  }
};