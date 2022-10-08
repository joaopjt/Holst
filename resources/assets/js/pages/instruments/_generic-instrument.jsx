import React, { Component } from 'react';

// F = 3.5px
// E = 8.5px

export default class GenericInstrumentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Paper Title',
      instrument: props.instrument,
      time: {
        notes: props.notes || 4,
        bars: props.bars || 4
      }
    }
  }

  componentDidMount() {
    this.setupNotesListener();
  }

  setupNotesListener() {
    const notes = document.querySelectorAll('div.bar-notes > span.note');

    notes.forEach((note) => {
      let parent = note.parentElement;

      parent.addEventListener("mouseover", (e) => {
        note.classList.add('hover');
      });

      parent.addEventListener("mouseout", (e) => {
        note.classList.remove('hover');
      });
    })
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

        if (this.state.time.notes === 2) className += ' bar-notes--two';
        if (this.state.time.notes === 5) className += ' bar-notes--five';
        if (this.state.time.notes === 6) className += ' bar-notes--six';
        if (this.state.time.notes === 7) className += ' bar-notes--seven';
        if (this.state.time.notes === 8) className += ' bar-notes--eight';

        notes.push(
          <div className={className} key={note} data-note-bar={bar} data-note={note} data-wroten-notep={null}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="note"></span>
          </div>
        );
      }

      bars.push(<div className="bar" key={bar} data-bar={bar}>{notes}</div>);
    }

    return (
      <div className="content">
        <div className="paper">
          <input className="paper-title paper-title--input" defaultValue={this.state.title} onChange={this.changeTitle.bind(this)}/>
          <p>{this.state.instrument}</p>

          <div className="paper-content">
            <div className="paper-line">
              <div className="bar bar--first" data-bar={0}>
                <div className="bar-notes bar-notes--clef bar-notes--time-signature bar-notes--two" data-note-bar={-2} data-note={1}>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
                <div className="bar-notes bar-notes--8-notes bar-notes--4-bars bar-notes--two" data-note-bar={0} data-note={2}>
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

          <div className="paper-content">
            <div className="paper-line">
              <div className="bar bar--first" data-bar={0}>
                <div className="bar-notes bar-notes--clef bar-notes--two" data-note-bar={-2} data-note={1}>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
                <div className="bar-notes bar-notes--two" data-note-bar={0} data-note={2}>
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

          <div className="paper-content">
            <div className="paper-line">
              <div className="bar bar--first" data-bar={0}>
                <div className="bar-notes bar-notes--clef bar-notes--two" data-note-bar={-2} data-note={1}>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
                <div className="bar-notes bar-notes--two" data-note-bar={0} data-note={2}>
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

          <div className="paper-content">
            <div className="paper-line">
              <div className="bar bar--first" data-bar={0}>
                <div className="bar-notes bar-notes--clef bar-notes--two" data-note-bar={-2} data-note={1}>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
                <div className="bar-notes bar-notes--two" data-note-bar={0} data-note={2}>
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

          <div className="paper-content">
            <div className="paper-line">
              <div className="bar bar--first" data-bar={0}>
                <div className="bar-notes bar-notes--clef bar-notes--two" data-note-bar={-2} data-note={1}>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
                <div className="bar-notes bar-notes--two" data-note-bar={0} data-note={2}>
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

          <div className="paper-content">
            <div className="paper-line">
              <div className="bar bar--first" data-bar={0}>
                <div className="bar-notes bar-notes--clef bar-notes--two" data-note-bar={-2} data-note={1}>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
                <div className="bar-notes bar-notes--two" data-note-bar={0} data-note={2}>
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

          <div className="paper-content">
            <div className="paper-line">
              <div className="bar bar--first" data-bar={0}>
                <div className="bar-notes bar-notes--clef bar-notes--two" data-note-bar={-2} data-note={1}>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
                <div className="bar-notes bar-notes--two" data-note-bar={0} data-note={2}>
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

          <div className="paper-content">
            <div className="paper-line">
              <div className="bar bar--first" data-bar={0}>
                <div className="bar-notes bar-notes--clef bar-notes--two" data-note-bar={-2} data-note={1}>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
                <div className="bar-notes bar-notes--two" data-note-bar={0} data-note={2}>
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