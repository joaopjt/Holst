import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../../store';

import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis'; 

import Menu from './_menu';
import Main from './_main';

export default class App extends Component {
  constructor() {
    this.auth = null;
    this.googleService = null;

    this.googleSignIn();
  }

  async googleSignIn() {
    let t = this;
    this.auth = new GoogleAuth({
      scopes: 'https://www.googleapis.com/auth/drive',
    });

    await this.auth.getClient();

    this.googleService = google.drive({
      auth: this.auth,
      version: 'v3'
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Menu />
        <Main />
      </Provider>
    );
  }
};