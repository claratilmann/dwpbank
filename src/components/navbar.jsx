import React from "react";
import { Link } from "carbon-components-react";

const NavigationBar = () => {
  return (
    <nav aria-label="Main navigation" className="navigation-bar">
      <ul className="navigation-list">
        <li>
          <Link href="/home" aria-label="Home page">
            Home
          </Link>
        </li>
        <li>
          <Link href="/aboutus" aria-label="About page">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/contactus" aria-label="Contact page">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
