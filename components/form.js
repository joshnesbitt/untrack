import React from 'react';

import untrack from '../lib/untrack';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { output: '' };
  }

  onChange(e) {
    this.setState({ output: untrack(e.target.value) });
  }

  onCopy(e) {
    if(!this.refs.output)
      return;

    this.refs.output.select();
    document.execCommand('copy');

    const button = this.refs.button;
    button.innerHTML = 'Copied!'
    setTimeout(() => { button.innerHTML = 'Copy' }, 3000);
  }

  componentDidMount(){
    this.refs.input.focus();
  }

  render() {
    return (
      <div className="u-text-center">
        <div>
          <input placeholder="Paste link here..." ref="input" onChange={this.onChange.bind(this)} className="c-input" />
        </div>

        <div>
          {this.state.output && <textarea className="c-output" ref="output" value={this.state.output} readOnly rows="2" />}
        </div>

        <div>
          {this.state.output && <button className="c-button" ref="button" onClick={this.onCopy.bind(this)}>Copy</button>}
        </div>
      </div>
    )
  }
}
