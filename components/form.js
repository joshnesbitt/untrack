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
      <div>
        <div>
          <input placeholder="Paste link here..." ref="input" onChange={this.onChange.bind(this)} className="input" />
        </div>

        <div>
          {this.state.output && <textarea className="output" ref="output" value={this.state.output} readOnly rows="1" />}
        </div>

        <div>
          <button ref="button" onClick={this.onCopy.bind(this)}>Copy</button>
        </div>
      </div>
    )
  }
}
