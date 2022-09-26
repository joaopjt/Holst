  import React, { Component } from 'react';

export default class PianoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Paper Title',
      instrument: props.instrument,
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

      for(let note = 0; note < this.state.time.notes; note++) {
        let className = "bar-notes";

        if (this.state.time.notes === 5) className += ' bar-notes--five';
        if (this.state.time.notes === 6) className += ' bar-notes--six';
        if (this.state.time.notes === 7) className += ' bar-notes--seven';

        notes.push(
          <div className={className} data-note-bar={bar} data-note={note}>
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
          <p>{this.state.instrument}</p>

          <div className="paper-content paper-content--piano">
            <div className="paper-line">
              <div className="bar bar--first" data-bar={0}>
                <div className="bar-notes bar-notes--clef bar-notes--two" data-note-bar={-1} data-note={1}>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
                <div className="bar-notes bar-notes--7-notes bar-notes--4-bars bar-notes--two" data-note-bar={-1} data-note={2}>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
              </div>

              {bars}
            </div>
            <div className="paper-line paper-line--bass-choir">
              <div className="bar bar--first" data-bar={0}>
                <div className="bar-notes bar-notes--two" data-note-bar={-1} data-note={1}>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
                <div className="bar-notes bar-notes--two" data-note-bar={-1} data-note={2}>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
              </div>

              {bars}
            </div>
          </div>
        </div>
      </div>
    )
  }
}