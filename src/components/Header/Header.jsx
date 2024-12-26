import { NavLink } from 'react-router-dom'
import logo from '@assets/logo.png'
import './Header.scss'

function Header() {
    return (
        <header className='header'>
            <img src={logo} alt="Kasa logo" />
            <nav>
                <ul className='header__nav'>
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
