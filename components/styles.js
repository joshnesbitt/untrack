export default function Styles() {
  // TODO: Sort styles.

  return (
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

      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 3rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 70px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #bbb;
      }

      a {
        color: #0fdfef;
        text-decoration: none;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
        text-align: center;
      }

      .input {
        border: none;
        border-bottom: 2px dotted #ccc;
        font-size: 2em;
        padding: 0.2em 0.4em;
        width: 100%;
      }

      .input:focus {
        outline: none;
      }

      .output {
        border: none;
        resize: none;
        background: #0a0a0a;
        color: white;
        padding: 0.4em;
      }

      .title,
      .input,
      .output {
        margin-bottom: 0.5em;
      }
    `}</style>
  )
};
