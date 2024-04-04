/* Modules imports */
import { Link } from "react-router-dom";
import { useState } from "react";

/* Header component CSS import */
import "./header.scss";

/* Assets imports */
import MarvelLogo from "../../assets/images/vectors/MarvelLogo";
import BurgerIcon from "../../assets/images/vectors/BurgerIcon";
import CloseIcon from "../../assets/images/vectors/CloseIcon";

const Header = () => {
    // Mobile menu state
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="mobile-header container">
                <Link onClick={() => { setMenuOpen(!menuOpen) }} to="/" className="logo">
                    <MarvelLogo />
                </Link>
                <button
                    onClick={() => { setMenuOpen(!menuOpen) }}
                    className="button navlinks-button">
                    {menuOpen ? <CloseIcon /> : <BurgerIcon />}
                </button>
            </div>
            <div className="navigation">
                <div className="searchbox-container">
                    <form>
                        <input type="text" placeholder="Rechercher" />
                        <input type="submit" value="Rechercher" />
                    </form>
                </div>
                <nav className={menuOpen ? "navlinks container" : "navlinks hidden container"}>
                    <ul>
                        <li><Link onClick={() => { setMenuOpen(false) }} to="/">Accueil</Link></li>
                        <li><Link onClick={() => { setMenuOpen(false) }} to="/comics">Les comics Marvel</Link></li>
                        <li><Link onClick={() => { setMenuOpen(false) }} to="/characters">Les héros Marvel</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;