import "./Footer.css"

function Footer() {
    return (
        <footer className="bee-footer">
            <div className="bee-footer-content">
                <p>&copy; {new Date().getFullYear()} Abeille – Eine Seite über Bienen</p>
                <nav>
                    <a href="/wiki">Wiki</a>
                    <a href="/honey">Honig</a>
                    <a href="/tasks">Aufgaben</a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
