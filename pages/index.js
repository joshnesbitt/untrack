import React from 'react';
import Head from 'next/head'

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = { output: '' };
  }

  onChange(e) {
    // TODO: Actual untrack logic.
    this.setState({ output: e.target.value });
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
      <div className="container">
        <Head>
          <title>Untrack</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">
            Untrack That Link
          </h1>

          <p className="description">
            <input placeholder="Paste link here..." ref="input" onChange={this.onChange.bind(this)} className="input" />
          </p>

          {this.state.output && <textarea className="output" ref="output" value={this.state.output} readOnly rows="1" />}

          <button ref="button" onClick={this.onCopy.bind(this)}>Copy</button>
        </main>

        <footer>
          <div>
            Built by
            {" "}
            <a href="https://twitter.com/joshnesbitt">@joshnesbitt</a>
            {" & "}
            <a href="https://twitter.com/MrRio">@MrRio</a>
          </div>
        </footer>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }


          a {
            color: inherit;
            text-decoration: none;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .input {
            border: none;
            border-bottom: 2px dotted #ccc;
            font-size: 1.4em;
            padding: 0.2em 0.4em;
            width: 100%;
          }

          .output {
            border: none;
            resize: none;
            background: #0a0a0a;
            color: white;
            margin-bottom: 1em;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    )
  }
}
