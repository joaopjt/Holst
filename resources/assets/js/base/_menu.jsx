import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <h1 className="menu-title">Holst</h1>

        <span className="menu-separator"></span>

        <a href="#" className="menu-link">Sign In</a>
        <a href="/app" className="menu-link">Compose</a>
      </div>
    );
  }
};