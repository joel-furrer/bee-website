import "./Header.css"

function Header() {
    return (
        <header className="header__header" >
            <nav 
                className="header__nav"
            >
                <a 
                    className="header__nav__title header__nav__title--main" 
                    href="/home" 
                >
                    Abeille
                </a>
                <a className="header__nav__title" href="/wiki" >Wiki</a>
                <a className="header__nav__title" href="/honey" >Honig</a>
                <a className="header__nav__title" href="/" >Aufgaben</a>
            </nav>
        </header>
    )
}

export default Header;
