import { Link } from "carbon-components-react";

const NavigationBar = () => {
  return (
    <nav aria-label="Navigation" className="navigation-bar">
      <ul className="navigation-list">
        <li>
          <Link href="/">Startseite</Link>
        </li>
        <li>
          <Link href="/search">Favoriten</Link>
        </li>
        <li>
          <Link href="/comparison">Vergleich</Link>
        </li>
        <li>
          <Link href="/" class="account">
            Mein Konto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
