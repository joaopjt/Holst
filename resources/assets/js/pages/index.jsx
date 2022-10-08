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
import InstrumentsPage from './_app'
import ComposerPage from './_composer'
import PianoPage from './instruments/_piano'
import GenericInstrumentPage from './instruments/_generic-instrument'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Menu />
        <main className="main">
          <Router>
            <Routes>
              <Route path="/piano" element={<PianoPage instrument="Acustic Piano"/>} />
              <Route path="/flute" element={<GenericInstrumentPage instrument="Flute"/>} />
              <Route path="/violin" element={<GenericInstrumentPage instrument="Violin"/>} />
              <Route path="/viola" element={<GenericInstrumentPage instrument="Viola"/>} />
              <Route path="/cello" element={<GenericInstrumentPage instrument="Cello"/>} />
              <Route path="/app/:id" element={<ComposerPage />} />
              <Route path="/app" element={<InstrumentsPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Router>
        </main>
      </Provider>
    );
  }
};