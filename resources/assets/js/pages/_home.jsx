import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <div className="login">
          <h1 className="login-title">Login with Google</h1>
          <div id="g_id_signin"></div>
        </div>
      </div>
    )
  }
}