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
              <Route path="/basson" element={<GenericInstrumentPage instrument="Bassoon"/>} />
              <Route path="/harp" element={<GenericInstrumentPage instrument="Harp"/>} />
              <Route path="/clavinet" element={<GenericInstrumentPage instrument="Clavinet"/>} />
              <Route path="/vibraphone" element={<GenericInstrumentPage instrument="Vibraphone"/>} />
              <Route path="/marimba" element={<GenericInstrumentPage instrument="Marimba"/>} />
              <Route path="/xylophone" element={<GenericInstrumentPage instrument="Xylophone"/>} />
              <Route path="/tubular-bells" element={<GenericInstrumentPage instrument="Tubular Bells"/>} />
              <Route path="/eletric-guitar" element={<GenericInstrumentPage instrument="Eletric Guitar"/>} />
              <Route path="/trumpet" element={<GenericInstrumentPage instrument="Trumped"/>} />
              <Route path="/trombone" element={<GenericInstrumentPage instrument="Trombone"/>} />
              <Route path="/tuba" element={<GenericInstrumentPage instrument="Tuba"/>} />
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