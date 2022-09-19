import React, { Component } from 'react';

export default class ComposerPage extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Paper Title',
      time: {
        notes: 7,
        bars: 4
      }
    }
  }

  changeTitle(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    const lines = [];
    const bars = [];

    for(let bar = 0; bar < this.state.time.bars; bar++) {
      let notes = [];
      let notesCount = (bar === 0) ? this.state.time.notes + 2 : this.state.time.notes;

      for(let note = 0; note < notesCount; note++) {
        let className = "bar-notes";
        let noteCount = (bar === 0) ? note - 2 : note;
        
        if (bar === 0) className += ' bar-notes--first';
        if (this.state.time.notes === 5) className += ' bar-notes--five';
        if (this.state.time.notes === 6) className += ' bar-notes--six';
        if (this.state.time.notes === 7) className += ' bar-notes--seven';

        notes.push(
          <div className={className} data-note-bar={bar} data-note={noteCount}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        )
      }

      bars.push(<div className="bar" data-bar={bar}>{notes}</div>);
    }

    return (
      <div className="content">
        <div className="paper">
          <input className="paper-title paper-title--input" defaultValue={this.state.title} onChange={this.changeTitle.bind(this)}/>
          <p>Acoustic Piano</p>

          <div className="paper-content">
            <div className="paper-line">
              {bars}
            </div>
          </div>
        </div>
      </div>
    )
  }
}