import React, { Component } from 'react';

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

  googleSignIn() {
    this.auth = new GoogleAuth({
      scopes: 'https://www.googleapis.com/auth/drive',
    });

    this.googleService = google.drive({version: 'v3', this.auth});
  }

  render() {
    return (
      <div class="app">
        <Menu />
        <Main />
      </div>
    );
  }
};