export default function Styles() {
  // TODO: Sort styles.

  return (
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      .container {
        margin: 0 auto;
        max-width: 600px;
        padding: 0 0.5rem;
        text-align: center;
      }

      main {
        padding: 3rem 0;
      }

      footer {
        height: 70px;
        padding: 2em;
        margin-top: 2em;
        text-align: center;
        border-top: 1px solid #eaeaea;
        color: #bbb;
      }

      a {
        color: #0fdfef;
        text-decoration: none;
      }

      .title {
        margin: 0;
        font-size: 4rem;
      }

      .input {
        border: none;
        border-bottom: 2px dotted #ccc;
        font-size: 2em;
        padding: 0.2em 0.4em;
        width: 90%;
      }

      .input:focus {
        outline: none;
      }

      .output {
        border: 1px #e2e2e2 solid;
        border-radius: 3px;
        resize: none;
        word-break: break-all;
        background: white;
        color: #e01e5a;
        width: 60%;
      }

      .title,
      .input,
      .output {
        margin-bottom: 0.5em;
      }

      @media (max-width: 600px) {
        .title {
          font-size: 2rem;
        }
        .input {
          font-size: 1.5rem;
        }
      }
    `}</style>
  )
};
