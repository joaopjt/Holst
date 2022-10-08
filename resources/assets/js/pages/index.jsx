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
              <Route path="/piano" element={<PianoPage instrument="Acustic Piano" notes={8} bars={4} />} />
              <Route path="/flute" element={<GenericInstrumentPage instrument="Flute" notes={8} bars={4} />} />
              <Route path="/violin" element={<GenericInstrumentPage instrument="Violin" notes={4} bars={4} />} />
              <Route path="/viola" element={<GenericInstrumentPage instrument="Viola" notes={4} bars={4} />} />
              <Route path="/cello" element={<GenericInstrumentPage instrument="Cello" notes={8} bars={4} />} />
              <Route path="/basson" element={<GenericInstrumentPage instrument="Bassoon" notes={8} bars={4} />} />
              <Route path="/harp" element={<GenericInstrumentPage instrument="Harp" notes={8} bars={4} />} />
              <Route path="/clavinet" element={<GenericInstrumentPage instrument="Clavinet" notes={8} bars={4} />} />
              <Route path="/vibraphone" element={<GenericInstrumentPage instrument="Vibraphone" notes={8} bars={4} />} />
              <Route path="/marimba" element={<GenericInstrumentPage instrument="Marimba" notes={8} bars={4} />} />
              <Route path="/xylophone" element={<GenericInstrumentPage instrument="Xylophone" notes={8} bars={4} />} />
              <Route path="/tubular-bells" element={<GenericInstrumentPage instrument="Tubular Bells" notes={8} bars={4} />} />
              <Route path="/eletric-guitar" element={<GenericInstrumentPage instrument="Eletric Guitar" notes={8} bars={4} />} />
              <Route path="/trumpet" element={<GenericInstrumentPage instrument="Trumped" notes={4} bars={4} />} />
              <Route path="/trombone" element={<GenericInstrumentPage instrument="Trombone" notes={4} bars={4} />} />
              <Route path="/tuba" element={<GenericInstrumentPage instrument="Tuba" notes={4} bars={4} />} />
              <Route path="/french-horn" element={<GenericInstrumentPage instrument="French Horn" notes={4} bars={4} />} />
              <Route path="/brass-section" element={<GenericInstrumentPage instrument="Brass Section" notes={4} bars={4} />} />
              <Route path="/soprano-sax" element={<GenericInstrumentPage instrument="Soprano Sax" notes={4} bars={4} />} />
              <Route path="/alto-sax" element={<GenericInstrumentPage instrument="Alto Sax" nottes={4} bars={4} />} />
              <Route path="/baritone-sax" element={<GenericInstrumentPage instrument="Baritone Sax" nottes={8} bars={4} />} />
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