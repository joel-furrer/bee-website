import "./Footer.css"
import { useTranslation } from "react-i18next"

function Footer() {
    const { t } = useTranslation()

    const year = new Date().getFullYear()

    return (
        <footer className="bee-footer">
            <div className="bee-footer-content">
                <p>{t("footer.copyright", { year })}</p>
                <p>{t("footer.made_with")}</p>
                <nav>
                    <a href="/wiki">{t("home.links.wiki")}</a>
                    <a href="/honey">{t("home.links.honey")}</a>
                    <a href="/tasks">{t("home.links.tasks")}</a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
