import React, { Component } from 'react';
import instrumentList from '../data/instruments.json';

export default class ComposerPage extends Component {
  constructor() {
    super();
    this.state = {
      instruments: instrumentList.instruments
    };
  }

  render() {
    return (
      <div className="content">
        <div className="container">
          <h2>Instruments</h2>

          <div className="instruments">
            {this.state.instruments.map((instrument, index) => {
              let src = `/assets/insturments/${instrument.image}`;

              return (<div className="instrument" key={index}>
                <img src={src} alt={instrument.name} title={instrument.name} />
                <h3>{instrument.name}</h3>
              </div>);
            })}            
          </div>
        </div>
      </div>
    )
  }
}