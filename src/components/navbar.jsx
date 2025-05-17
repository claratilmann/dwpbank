import { Link } from "@carbon/react";
import "../css/navbar.css";

const NavigationBar = () => {
  return (
    <nav aria-label="Navigation" className="navigation-bar">
      <ul className="navigation-list">
        <li>
          <Link href="/" class="navLink">
            Startseite
          </Link>
        </li>
        <li>
          <Link href="/saved" class="navLink">
            Favoriten
          </Link>
        </li>
        <li>
          <Link href="/comparison" class="navLink">
            Vergleich
          </Link>
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
