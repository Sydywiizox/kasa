import './Footer.scss';
import logo from '@assets/logo_white.png'

function Footer() {
    return (
        <footer className="footer">
            <img className='footer__img' src={logo} alt="Kasa logo" />
            <p className='footer__p'>&copy; 2020 Kasa. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
