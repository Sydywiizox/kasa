import { NavLink } from "react-router-dom";
import logo from "@assets/logo.png";
import "./Header.scss";

/**
 * Header component that displays the main site navigation.
 *
 * Includes a logo that links to the homepage and a navigation bar with links
 * to the home and about pages.
 *
 * @returns {JSX.Element} The header element containing the site's logo and navigation.
 */

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="Kasa logo" />
      </NavLink>
      <nav>
        <ul className="header__nav">
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
