import "./Footer.scss";
import logo from "@assets/logo_white.png";

/**
 * Footer component, displays the logo and copyright information
 * @returns {JSX.Element} - The JSX element representing the footer
 */
function Footer() {
  return (
    <footer className="footer">
      <img className="footer__img" src={logo} alt="Kasa logo" />
      <p className="footer__p">&copy; 2020 Kasa. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
