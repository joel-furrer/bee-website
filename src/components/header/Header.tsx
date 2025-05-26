import "./Header.css"
import { useTranslation } from "react-i18next"

function Header() {
    const { t } = useTranslation()

    return (
        <header className="header__header">
            <nav className="header__nav">
                <a 
                    className="header__nav__title header__nav__title--main" 
                    href="/home"
                >
                    {t("home.title")}
                </a>
                <a className="header__nav__title" href="/wiki">
                    {t("home.links.wiki")}
                </a>
                <a className="header__nav__title" href="/honey">
                    {t("home.links.honey")}
                </a>
                <a className="header__nav__title" href="/tasks">
                    {t("home.links.tasks")}
                </a>
            </nav>
        </header>
    )
}

export default Header
