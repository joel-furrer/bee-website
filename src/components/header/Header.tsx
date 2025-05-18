import "./Header.css"

function Header() {
    return (
        <header className="header__header" >
            <nav 
                className="header__nav"
            >
                <a 
                    className="header__nav__title header__nav__title--main" 
                    href="/" 
                >
                    Abeille
                </a>
                <a className="header__nav__title" href="/" >Wiki</a>
                <a className="header__nav__title" href="/" >Honig</a>
                <a className="header__nav__title" href="/" >Aufgaben</a>
            </nav>
        </header>
    )
}

export default Header;
