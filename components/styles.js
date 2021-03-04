export default function Styles() {
  const primaryColor = '#0fdfef';

  return (
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        color: #171717;
      }

      a {
        color: ${primaryColor};
        text-decoration: none;
      }

      p {
        line-height: 1.4rem;
      }

      .c-container {
        margin: 0 auto;
        max-width: 600px;
        padding: 0 0.5rem;
      }

      .c-container__inner {
        padding: 3rem 0;
      }

      .c-footer {
        height: 70px;
        padding: 2em;
        margin-top: 2em;
        text-align: center;
        border-top: 1px solid #eaeaea;
        color: #bbb;
      }

      .c-title {
        margin: 0;
        font-size: 4rem;
        text-align: center;
        color: #212121;
      }

      .c-input {
        border: none;
        border-bottom: 2px dotted #ccc;
        font-size: 2em;
        padding: 0.2em 0.4em;
        width: 90%;
      }

      .c-input:focus {
        outline: none;
      }

      .c-output {
        border: 1px #e2e2e2 solid;
        border-radius: 3px;
        resize: none;
        word-break: break-all;
        background: white;
        color: #e01e5a;
        width: 60%;
      }

      .c-title,
      .c-input,
      .c-output {
        margin-bottom: 0.5em;
      }

      .u-text-center {
        text-align: center;
      }

      .c-button {
        background: ${primaryColor};
        color: white;
        border: 2px ${primaryColor} solid;
        font-size: 1.4rem;
        padding: 0.4rem 1rem;
        cursor: pointer;
      }

      .c-button:hover {
        background: white;
        color: ${primaryColor};

      }

      @media (max-width: 600px) {
        .c-title {
          font-size: 2rem;
        }

        .c-input {
          font-size: 1.5rem;
        }

        .c-button {
          font-size: 1rem;
        }
      }
    `}</style>
  )
};
