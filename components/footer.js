import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="c-footer">
      <div>
        Built by
        {" "}
        <a target="_blank" href="https://twitter.com/joshnesbitt">@joshnesbitt</a>
        {" & "}
        <a target="_blank" href="https://twitter.com/MrRio">@MrRio</a>

        {" · "}

        <Link href="/about">
          <a>Why?</a>
        </Link>

        {" · "}

        <a target="_blank" href="https://github.com/joshnesbitt/untrack">Source</a>
      </div>
    </footer>
  )
};
