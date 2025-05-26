import "./Home.css"
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="container__home">
            <section className="hero">
                <h1>Abeille</h1>
                <p>Entdecke die faszinierende Welt der Bienen 🐝</p>
            </section>

            <section className="intro">
                <p>
                    Willkommen auf <strong>Abeille</strong> – deiner Plattform für alles rund um Bienen.
                    Von Artenvielfalt über Kommunikation bis hin zu ihrer Rolle im Ökosystem:
                    Hier erfährst du, warum Bienen so wichtig sind.
                </p>
            </section>

            <section className="tiles">
                <Link to="/wiki" className="tile">
                    <h2>Wiki</h2>
                    <p>Bienenarten, Lebensräume & mehr</p>
                </Link>
                <Link to="/honey" className="tile">
                    <h2>Honig</h2>
                    <p>Wie entsteht Honig und warum ist er so besonders?</p>
                </Link>
                <Link to="/tasks" className="tile">
                    <h2>Aufgaben</h2>
                    <p>Was machen Bienen eigentlich den ganzen Tag?</p>
                </Link>
            </section>
        </div>
    )
}

export default Home
