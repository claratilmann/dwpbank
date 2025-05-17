import { Link } from "carbon-components-react";
import "../css/navbar.css";

const NavigationBar = () => {
  return (
    <nav aria-label="Navigation" className="navigation-bar">
      <ul className="navigation-list">
        <li>
          <Link href="/">Startseite</Link>
        </li>
        <li>
          <Link href="/saved">Favoriten</Link>
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
