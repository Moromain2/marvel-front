/* Modules imports */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

/* Header component CSS import */
import "./header.scss";

/* Assets imports */
import MarvelLogo from "../../assets/images/vectors/MarvelLogo";
import BurgerIcon from "../../assets/images/vectors/BurgerIcon";
import CloseIcon from "../../assets/images/vectors/CloseIcon";
import ManifyingGlassIcon from "../../assets/images/vectors/ManifyingGlassIcon";

const Header = ({ setSearch, search }) => {
    // Mobile menu state
    const [menuOpen, setMenuOpen] = useState(false);

    // Showing search bar only on the relevant pages
    const [showSearchBar, setShowSearchBar] = useState(false);
    useEffect(() => {
        const pagePath = window.location.href;
        if (pagePath.includes("/comics") || pagePath.includes("/characters")) {
            setShowSearchBar(true);
        } else {
            setShowSearchBar(false);
        }
    });

    const handleSearch = (e) => {
        let searchValue = e.target.value;
        setSearch(searchValue);
    }


    return (
        <header>
            <div className="header-wrapper">
                <div className="mobile-header container">
                    <Link onClick={() => { setMenuOpen(false) }} to="/" className="logo">
                        <MarvelLogo />
                    </Link>
                    <button
                        onClick={() => { setMenuOpen(!menuOpen) }}
                        className="button navlinks-button">
                        {menuOpen ? <CloseIcon /> : <BurgerIcon />}
                    </button>
                </div>
                <div className="navigation">
                    {showSearchBar &&
                        <div className="searchbox-container">
                            <form>
                                <input onChange={(e) => { handleSearch(e) }} className="input-field" type="text" placeholder="Rechercher" />
                                <button className="button">
                                    <ManifyingGlassIcon />
                                </button>
                            </form>
                        </div>
                    }
                    <nav className={menuOpen ? "navlinks container" : "navlinks hidden container"}>
                        <ul>
                            <li><Link onClick={() => { setMenuOpen(false) }} to="/">Accueil</Link></li>
                            <li><Link onClick={() => { setMenuOpen(false) }} to="/comics">Les comics Marvel</Link></li>
                            <li><Link onClick={() => { setMenuOpen(false) }} to="/characters">Les héros Marvel</Link></li>
                            <li><Link onClick={() => { setMenuOpen(false) }} to="/favorites">Vos héros favoris</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;