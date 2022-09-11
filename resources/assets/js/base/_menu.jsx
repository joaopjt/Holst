import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <div class="menu">
        <a href="#" class="sign-in">Sign In</a>
        <a href="#" class="user">
          <span class="user-picture"></span>
        </a>
      </div>
    );
  }
};