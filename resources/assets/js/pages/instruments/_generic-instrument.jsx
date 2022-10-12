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

  noteListener(line, e) {
    let note = e.target.dataset['note'];

    e.target.classList.add('active');
    e.target.classList.remove('hover');
  }

  lineListenerOver(e) {
    let note = document.createElement('span');

    if (e.target.parentElement.dataset.wrotenNote == "0") {
      note.classList.add('note');
      note.classList.add('hover');

      e.target.appendChild(note);

      note.addEventListener('click', this.noteListener.bind(this, e.target));
    }
  }

  lineListenerOut(e) {
    e.target.removeChild(e.target.querySelector('span.note:not(.active)'));
  }

  setupNotesListener() {
    const lines = document.querySelectorAll('div.bar-notes > span.line');

    lines.forEach((line) => {
      line.addEventListener("mouseover", this.lineListenerOver.bind(this));

      line.addEventListener("mouseout", this.lineListenerOut.bind(this));
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
        if (this.state.time.notes === 4) className += ' bar-notes--four';
        if (this.state.time.notes === 5) className += ' bar-notes--five';
        if (this.state.time.notes === 6) className += ' bar-notes--six';
        if (this.state.time.notes === 7) className += ' bar-notes--seven';
        if (this.state.time.notes === 8) className += ' bar-notes--eight';

        notes.push(
          <div class={className} key={note} data-note-bar={bar} data-note={note} data-wroten-note={0}>
            <span class="line line--blank" data-note="F"></span>
            <span class="line line--blank" data-note="E"></span>
            <span class="line line--blank" data-note="D"></span>
            <span class="line line--blank" data-note="C"></span>
            <span class="line line--blank" data-note="B"></span>
            <span class="line line--blank" data-note="A"></span>
            <span class="line line--blank" data-note="G"></span>
            <span class="line" data-note="F"></span>
            <span class="line line--blank" data-note="E"></span>
            <span class="line" data-note="D"></span>
            <span class="line line--blank" data-note="C"></span>
            <span class="line" data-note="B"></span>
            <span class="line line--blank" data-note="A"></span>
            <span class="line" data-note="G"></span>
            <span class="line line--blank" data-note="F"></span>
            <span class="line" data-note="E"></span>
            <span class="line line--blank" data-note="D"></span>
            <span class="line line--blank" data-note="C"></span>
            <span class="line line--blank" data-note="B"></span>
            <span class="line line--blank" data-note="A"></span>
            <span class="line line--blank" data-note="G"></span>
            <span class="line line--blank" data-note="F"></span>
            <span class="line line--blank" data-note="E"></span>
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
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span class="line" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span class="line" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span class="line" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span class="line" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span class="line" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                </div>
                <div className="bar-notes bar-notes--8-notes bar-notes--4-bars bar-notes--two" data-note-bar={0} data-note={2}>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span class="line" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span class="line" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span class="line" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span class="line" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span class="line" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                </div>
              </div>

              {bars}
            </div>
          </div>

          <div className="paper-content">
            <div className="paper-line">
              <div className="bar bar--first" data-bar={0}>
                <div className="bar-notes bar-notes--clef bar-notes--two" data-note-bar={-2} data-note={1}>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span class="line" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span class="line" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span class="line" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span class="line" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span class="line" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                </div>
                <div className="bar-notes bar-notes--two" data-note-bar={0} data-note={2}>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span class="line" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span class="line" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span class="line" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span class="line" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span class="line" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                </div>
              </div>

              {bars}
            </div>
          </div>

          <div className="paper-content">
            <div className="paper-line">
              <div className="bar bar--first" data-bar={0}>
                <div className="bar-notes bar-notes--clef bar-notes--two" data-note-bar={-2} data-note={1}>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span class="line" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span class="line" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span class="line" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span class="line" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span class="line" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                </div>
                <div className="bar-notes bar-notes--two" data-note-bar={0} data-note={2}>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span class="line" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span class="line" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span class="line" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span class="line" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span class="line" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                </div>
              </div>

              {bars}
            </div>
          </div>

          <div className="paper-content">
            <div className="paper-line">
              <div className="bar bar--first" data-bar={0}>
                <div className="bar-notes bar-notes--clef bar-notes--two" data-note-bar={-2} data-note={1}>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span class="line" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span class="line" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span class="line" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span class="line" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span class="line" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                </div>
                <div className="bar-notes bar-notes--two" data-note-bar={0} data-note={2}>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span class="line" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span class="line" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span class="line" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span class="line" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span class="line" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                </div>
              </div>

              {bars}
            </div>
          </div>

          <div className="paper-content">
            <div className="paper-line">
              <div className="bar bar--first" data-bar={0}>
                <div className="bar-notes bar-notes--clef bar-notes--two" data-note-bar={-2} data-note={1}>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span class="line" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span class="line" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span class="line" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span class="line" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span class="line" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                </div>
                <div className="bar-notes bar-notes--two" data-note-bar={0} data-note={2}>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span class="line" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span class="line" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span class="line" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span class="line" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span class="line" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                </div>
              </div>

              {bars}
            </div>
          </div>

          <div className="paper-content">
            <div className="paper-line">
              <div className="bar bar--first" data-bar={0}>
                <div className="bar-notes bar-notes--clef bar-notes--two" data-note-bar={-2} data-note={1}>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span class="line" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span class="line" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span class="line" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span class="line" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span class="line" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                </div>
                <div className="bar-notes bar-notes--two" data-note-bar={0} data-note={2}>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span class="line" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span class="line" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span class="line" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span class="line" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span class="line" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                </div>
              </div>

              {bars}
            </div>
          </div>

          <div className="paper-content">
            <div className="paper-line">
              <div className="bar bar--first" data-bar={0}>
                <div className="bar-notes bar-notes--clef bar-notes--two" data-note-bar={-2} data-note={1}>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span class="line" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span class="line" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span class="line" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span class="line" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span class="line" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                </div>
                <div className="bar-notes bar-notes--two" data-note-bar={0} data-note={2}>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span class="line" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span class="line" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span class="line" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span class="line" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span class="line" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                </div>
              </div>

              {bars}
            </div>
          </div>

          <div className="paper-content">
            <div className="paper-line">
              <div className="bar bar--first" data-bar={0}>
                <div className="bar-notes bar-notes--clef bar-notes--two" data-note-bar={-2} data-note={1}>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span class="line" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span class="line" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span class="line" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span class="line" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span class="line" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                </div>
                <div className="bar-notes bar-notes--two" data-note-bar={0} data-note={2}>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span class="line" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
                  <span class="line" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span class="line" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span class="line" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span class="line" data-note="E"></span>
                  <span className="line line--blank" data-note="D"></span>
                  <span className="line line--blank" data-note="C"></span>
                  <span className="line line--blank" data-note="B"></span>
                  <span className="line line--blank" data-note="A"></span>
                  <span className="line line--blank" data-note="G"></span>
                  <span className="line line--blank" data-note="F"></span>
                  <span className="line line--blank" data-note="E"></span>
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