import "./Home.css"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

function Home() {
    const { t } = useTranslation()

    return (
        <div className="container__home">
            <section className="hero">
                <h1>{t("home.title")}</h1>
                <p>{t("home.subtitle")}</p>
            </section>

            <section className="intro">
                <p>{t("home.intro", { project: "Abeille" })}</p>
            </section>

            <section className="tiles">
                <Link to="/wiki" className="tile">
                    <h2>{t("home.links.wiki")}</h2>
                    <p>{t("home.links.wiki_desc")}</p>
                </Link>
                <Link to="/honey" className="tile">
                    <h2>{t("home.links.honey")}</h2>
                    <p>{t("home.links.honey_desc")}</p>
                </Link>
                <Link to="/tasks" className="tile">
                    <h2>{t("home.links.tasks")}</h2>
                    <p>{t("home.links.tasks_desc")}</p>
                </Link>
            </section>
        </div>
    )
}

export default Home
