import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <span className="menu-title">Holst</span>
        <a href="#" className="sign-in">Sign In</a>
        <a href="#" className="user">
          <span className="user-picture"></span>
        </a>
      </div>
    );
  }
};