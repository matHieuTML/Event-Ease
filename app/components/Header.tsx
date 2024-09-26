import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/event">Article</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
